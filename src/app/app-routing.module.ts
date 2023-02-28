import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { CompanyServicesComponent } from './components/company-services/company-services.component';
import { PricelistComponent } from './components/pricelist/pricelist.component';
import { CompanyStoryComponent } from './components/company-story/company-story.component';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'palvelumme', component: CompanyServicesComponent },
{ path: 'hinnasto', component: PricelistComponent },
{ path: 'tarinamme', component: CompanyStoryComponent },
{ path: 'yhteystiedot', component: ContactComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
