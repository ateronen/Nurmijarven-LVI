import { Component } from '@angular/core';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  phone: String = "+358404147502";
  email: String = "lauri(at)nurmijarvenlvi.fi";
  businessId: String = "3291802-7";
  currentDate = new Date().getFullYear();
  footerCopyright: String =  "Nurmijärven LVI Oy, "+ this.currentDate;

  faSquareInstagram = faSquareInstagram;

  goToUrl() {
    window.open('https://instagram.com/nurmijarvenlvi', '_blank');
  }

}
