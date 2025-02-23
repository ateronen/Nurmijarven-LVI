import { NgModule } from '@angular/core';

import { CompanyServicesComponent } from './components/company-services/company-services.component';
import { PricelistComponent } from './components/pricelist/pricelist.component';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
{ path: '', component: DashboardComponent, pathMatch: 'full',
    data: {
    title: "Nurmijärven LVI Oy - Etusivu",
    description: 
    "LVI-asennus-, huolto- ja ylläpitotyöt tarpeen mukaan. Toimimme pääasiassa Nurmijärvellä ja lähikunnissa Uudenmaan alueella.",
    keywords: 
    "lvi, nurmijärvi, putkiasennus, putkiasentaja, putkiliike, lvi-huolto, uusimaa, lvi-työt, yrityksille, yhteistyökumppani"
  }
},
{ path: 'palvelumme', component: CompanyServicesComponent,
  data: {
    title: "Nurmijärven LVI Oy - Palvelumme",
    description: "Minkälaisia töitä teemme? Täältä näet saatavilla olevat palvelumme."
  } 
},
{ path: 'hinnasto', component: PricelistComponent,
  data: {
    title: "Nurmijärven LVI Oy - Hinnasto",
    description: "Täältä näet hinnastomme."
  }
},
{ path: 'yhteystiedot', component: ContactComponent,
    data: {
    title: "Nurmijärven LVI Oy - Yhteystiedot",
    description: "Tarvitsetko yhteistyökumppania? Ota yhteyttä."
  }
},
{ path: '**', component: PageNotFoundComponent,
    data: {
    title: "Nurmijärven LVI Oy - Sivua ei löydy",
    description: "Sivua ei löydy tai on tapahtunut virhe."
  } 
},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
