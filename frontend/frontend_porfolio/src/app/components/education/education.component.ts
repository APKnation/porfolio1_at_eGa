import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../models/portfolio.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  @Input() experiences: Experience[] = [];

  get sortedExperiences(): Experience[] {
    return [...this.experiences].sort((a, b) =>
      new Date(b.start_date).getTime() - new Date(a.start_date).getTime()
    );
  }
}
