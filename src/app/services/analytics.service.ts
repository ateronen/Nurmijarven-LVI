import { Injectable } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private trackingId = environment.googleAnalytics;
  private trackingEnabled = false;

  constructor(private router: Router) {
    this.loadGtagIfAccepted();
    this.trackPageViews();
  }

  private loadGtagIfAccepted() {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'accepted') {
      this.trackingEnabled = true;
      this.loadGtag();
    }
    else {
      this.removeGtag();
    }
  }

  private loadGtag() {
    if (!this.trackingId) {
      console.warn('Google Analytics Tracking ID is missing in environment settings.');
      return;
    }
    if (!this.trackingEnabled || document.getElementById('google-analytics-script')) return;

    const script = document.createElement('script');
    script.id = 'google-analytics-script';
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.trackingId}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      const gtagContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){ window.dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', '${this.trackingId}');
      `;
    
      const gtagEl = document.createElement('script');
      gtagEl.id = 'google-analytics-inline-script';
      gtagEl.innerHTML = gtagContent;
      document.head.appendChild(gtagEl);
    };
  }

  private removeGtag() {
    const gtagscript = document.getElementById('google-analytics-script');
    if (gtagscript) {
      gtagscript.remove();
    }

    const inlineScript = document.getElementById('google-analytics-inline-script');
    if (inlineScript) {
      inlineScript.parentNode?.removeChild(inlineScript);
    }
  }

  private deleteGACookies() {
    const cookiesToDelete = ['_ga', '_gid', `_ga_${this.trackingId}`];
  
    cookiesToDelete.forEach(cookieName => {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${location.hostname}`;
      const mainDomain = location.hostname.split('.').slice(-2).join('.');
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${mainDomain}`;
    });
  }

  private trackPageViews() {
    this.router.events.subscribe((event: Event) => {
      if (!this.trackingEnabled) return; 
      if (event instanceof NavigationEnd) {
        this.logPageView(event.urlAfterRedirects);
      }
    });
  }

  private logPageView(url: string) {
    if ((window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_path: url,
        page_location: window.location.href
      });
    }
  }

  public acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    this.trackingEnabled = true;
    this.loadGtag();
    console.log('cookies accepted');
  }

  public rejectCookies() {
    localStorage.setItem('cookieConsent', 'rejected');
    this.trackingEnabled = false;
    this.removeGtag();
    this.deleteGACookies();
    console.log('cookies rejected');
  }

  public hasUserMadeChoice(): boolean {
    return localStorage.getItem('cookieConsent') !== null;
  }
}