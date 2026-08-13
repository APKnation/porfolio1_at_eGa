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

  /** Entries whose exp_type contains 'education' (case-insensitive) */
  get educationEntries(): Experience[] {
    return this.sortedExperiences.filter(e =>
      (e.exp_type || '').toLowerCase().includes('education')
    );
  }

  /** Entries whose exp_type does NOT contain 'education' (work / internship / etc.) */
  get experienceEntries(): Experience[] {
    return this.sortedExperiences.filter(e =>
      !(e.exp_type || '').toLowerCase().includes('education')
    );
  }
}
