import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Profile } from '../../models/portfolio.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() profile: Profile = { experiences: [], projects: [], skills: [] };

  get initials(): string {
    const name = this.profile.full_name || this.profile.name || 'P';
    return name.split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join('').toUpperCase();
  }

  get titleLeft(): string {
    const title = this.profile.title || 'Creative Professional';
    const words = title.trim().split(/\s+/);
    const half = Math.ceil(words.length / 2);
    return words.slice(0, half).join(' ');
  }

  get titleRight(): string {
    const title = this.profile.title || 'Creative Professional';
    const words = title.trim().split(/\s+/);
    const half = Math.ceil(words.length / 2);
    return words.slice(half).join(' ');
  }
}
