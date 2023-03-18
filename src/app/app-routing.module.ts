import { NgModule } from '@angular/core';

import { CompanyServicesComponent } from './components/company-services/company-services.component';
import { PricelistComponent } from './components/pricelist/pricelist.component';
// import { CompanyStoryComponent } from './components/company-story/company-story.component';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
{ path: '', redirectTo: '/', pathMatch: 'full' },
{ path: '', component: DashboardComponent },
{ path: 'palvelumme', component: CompanyServicesComponent },
{ path: 'hinnasto', component: PricelistComponent },
// { path: 'tarinamme', component: CompanyStoryComponent },
{ path: 'yhteystiedot', component: ContactComponent },
{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
