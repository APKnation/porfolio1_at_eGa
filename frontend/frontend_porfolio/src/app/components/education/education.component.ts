import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Education, Experience } from '../../models/portfolio.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  /** Education records from the API (one record per profile) */
  @Input() educations: Education[] = [];

  /** Work / internship experiences (non-education) */
  @Input() experiences: Experience[] = [];

  /** First education record (portfolio has one record per profile) */
  get education(): Education | null {
    return this.educations?.[0] ?? null;
  }

  /** Experience entries sorted by start date descending */
  get sortedExperiences(): Experience[] {
    return [...this.experiences].sort((a, b) =>
      new Date(b.start_date).getTime() - new Date(a.start_date).getTime()
    );
  }

  /** School levels as ordered cards for the horizontal row */
  get schoolLevels() {
    const edu = this.education;
    return [
      {
        label: 'Primary',
        tag:   'Primary School',
        name:  edu?.primary_school_name   || null,
        from:  edu?.primary_start_year    || null,
        to:    edu?.primary_end_year      || null,
        icon:  '🏫',
      },
      {
        label: 'Secondary',
        tag:   'O-Level',
        name:  edu?.secondary_school_name || null,
        from:  edu?.secondary_start_year  || null,
        to:    edu?.secondary_end_year    || null,
        icon:  '📚',
      },
      {
        label: 'Adv. Secondary',
        tag:   'A-Level',
        name:  edu?.advanced_secondary_school_name || null,
        from:  edu?.advanced_secondary_start_year  || null,
        to:    edu?.advanced_secondary_end_year    || null,
        icon:  '🎓',
      },
      {
        label: 'University',
        tag:   edu?.university_degree || 'Degree',
        name:  edu?.university_name   || null,
        sub:   edu?.university_field  || null,
        from:  edu?.university_start_year || null,
        to:    edu?.university_is_current ? 'Present' : (edu?.university_end_year || null),
        icon:  '🏛️',
      },
    ];
  }
}
