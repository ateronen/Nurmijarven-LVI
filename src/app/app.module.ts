//MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { AnalyticsService } from './services/analytics.service';

//ICONS
import 
{ faSquare, faCheckSquare, faBars, faXmark, faEnvelope, faPhone, faLocationDot, faHandPointRight, faAddressCard, faArrowUp } 
from '@fortawesome/free-solid-svg-icons';

import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

// COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CompanyServicesComponent } from './components/company-services/company-services.component';
import { PricelistComponent } from './components/pricelist/pricelist.component';
import { CompanyStoryComponent } from './components/company-story/company-story.component';
import { ContactComponent } from './components/contact/contact.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CookieBannerComponent } from './components/cookie-banner/cookie-banner.component';

@NgModule({ declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        CompanyServicesComponent,
        PricelistComponent,
        CompanyStoryComponent,
        ContactComponent,
        SocialMediaComponent,
        DashboardComponent,
        PageNotFoundComponent,
        CookieBannerComponent
    ],
    bootstrap: [AppComponent], 
    imports: [BrowserModule,
        AppRoutingModule,
        FontAwesomeModule], 
        
    providers: [provideHttpClient(withInterceptorsFromDi()), AnalyticsService/* GoogleAnalyticsService*/] })
    export class AppModule {
      constructor(library: FaIconLibrary) {
        library.addIcons(
          faSquare,
          faCheckSquare,
          faBars,
          faXmark,
          faEnvelope,
          faPhone,
          faLocationDot,
          faSquareInstagram,
          faHandPointRight,
          faAddressCard,
          faArrowUp
        );
      }
}
