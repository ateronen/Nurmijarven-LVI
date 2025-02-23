import { Component, ElementRef, ViewChild } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss']
})
export class CookieBannerComponent {

  @ViewChild('cookiePopover') cookiePopover!: ElementRef<HTMLDialogElement>;

  constructor(private gaService: AnalyticsService) {}

  ngAfterViewInit() {
    if (!this.gaService.hasUserMadeChoice()) {
      // Open popover when user visits the first time
      this.cookiePopover.nativeElement.showPopover();
    }
  }

  acceptCookies() {
    this.gaService.acceptCookies();
    this.cookiePopover.nativeElement.hidePopover();
  }

  rejectCookies() {
    this.gaService.rejectCookies();
    this.cookiePopover.nativeElement.hidePopover();
  }
}