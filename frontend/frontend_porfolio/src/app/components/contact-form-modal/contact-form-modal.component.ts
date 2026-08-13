import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Profile } from '../../models/portfolio.model';

@Component({
  selector: 'app-contact-form-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-form-modal.component.html',
  styleUrls: ['./contact-form-modal.component.css']
})
export class ContactFormModalComponent {
  @Input() isOpen = false;
  @Input() profile: Profile = { experiences: [], projects: [], skills: [] };
}
