import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  contactInfo: String[] = [
    "Testi", "Testi2"
  ];
  phone: String = "+123456789";
}
