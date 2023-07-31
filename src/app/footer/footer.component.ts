import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  phone: String = "+358404147502";
  email: String = "lauri(at)nurmijarvenlvi.fi";
  businessId: String = "3291802-7";
  currentDate = new Date().getFullYear();
  footerCopyright: String =  "Nurmijärven LVI Oy, "+ this.currentDate;

  faSquareInstagram = faSquareInstagram;
  instagramUrl: string = "https://instagram.com/nurmijarvenlvi/";
  contactDeveloperUrl: string = "https://www.linkedin.com/in/arttu-teronen999/";

  goToInstagram() {
    window.open(this.instagramUrl, '_blank');
  }
  goToDevContact() {
    window.open(this.contactDeveloperUrl, '_blank');
  }
}
