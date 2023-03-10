import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  companyName: String = "Nurmijärven LVI Oy";
  eInvoiceNr: String = "003732918027";
  operator: String = "Apix Messaging Oy (003723327487)";
  phone: String = "+358404147502";
  email: String = "lauri(at)nurmijarvenlvi.fi";
  businessId: String = "3291802-7";
  address: String = "Vanha Rajamäentie 2 as. 5, 05200 Rajamäki";
}
