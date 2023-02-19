import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CompanyServicesComponent } from './components/company-services/company-services.component';
import { PricelistComponent } from './components/pricelist/pricelist.component';
import { CompanyStoryComponent } from './components/company-story/company-story.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    CompanyServicesComponent,
    PricelistComponent,
    CompanyStoryComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'palvelumme', component: CompanyServicesComponent },
      { path: 'hinnasto', component: PricelistComponent },
      { path: 'tarinamme', component: CompanyStoryComponent },
      { path: 'yhteystiedot', component: ContactComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
