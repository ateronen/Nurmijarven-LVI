import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;
  isDashboard = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenuOnLoad() {
    this.isDashboard = true;
    this.isMenuOpen = false;
    if (window.location.pathname === "/") {
      window.location.reload();
    }
  }
}
