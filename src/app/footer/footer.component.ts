import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  phone: String = "+123456789";
  email: String = "lauri(at)nurmijarvenlvi.fi";

  currentDate = new Date().getFullYear();
  footerCopyright: String =  "Nurmijärven LVI Oy, "+ this.currentDate;
}
