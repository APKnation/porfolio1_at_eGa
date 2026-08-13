import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  isMenuOpen = false;

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  get initials(): string {
    const name = this.profile.full_name || this.profile.name || 'P';
    return name.split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join('').toUpperCase();
  }
}
