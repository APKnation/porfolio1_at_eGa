import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Profile } from '../../models/portfolio.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() profile: Profile = {
    experiences: [],
    projects: [],
    skills: []
  };

  get currentYear(): number {
    return new Date().getFullYear();
  }

  get initials(): string {
    const name = this.profile.full_name || this.profile.name || 'P';
    return name.split(' ').map(part => part[0]).join('').slice(0, 2).toUpperCase();
  }
}