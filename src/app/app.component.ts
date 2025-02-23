import { Component, Inject, OnInit} from '@angular/core';
import { ActivatedRoute, Data, NavigationEnd, Router } from '@angular/router';
import { MetaInformationService } from './services/meta-information.service';
import { debounceTime, fromEvent, map, filter, mergeMap, tap} from 'rxjs';
// import { GoogleAnalyticsService } from './services/google-analytics.service';
import { AnalyticsService } from './services/analytics.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

  providers: [
    AnalyticsService
  ],
})
export class AppComponent implements OnInit {
  title='';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private metaService: MetaInformationService,
    // private gaService: GoogleAnalyticsService
    private analyticsService: AnalyticsService
  ) {}

  showBtn$ = fromEvent(document, 'scroll').pipe(
    debounceTime(50),
    map(() => window.scrollY > 300)
  );

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  // @TODO: Might have to change the following later
  ngOnInit(): void {
      this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data),
        tap(({title,description, keywords}: Data) => {
          this.metaService.updateTitle(title);
          this.metaService.updateDescription(description);
          this.metaService.updateKeywords(keywords);
        })
      ).subscribe();

      // Init google analytics service
      // this.gaService.init();
      // this.analyticsService.trackEvent();
  }
}
