import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Profile } from '../../models/portfolio.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() profile: Profile = {
    experiences: [],
    projects: [],
    skills: []
  };

  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
