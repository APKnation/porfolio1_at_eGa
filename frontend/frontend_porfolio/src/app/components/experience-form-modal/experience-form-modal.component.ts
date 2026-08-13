import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'experience-form-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-form-modal.component.html',
  styleUrls: ['./experience-form-modal.component.css']
})
export class ExperienceFormModalComponent {
  @Input() isOpen = false;
}
