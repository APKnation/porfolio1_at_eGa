import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../models/portfolio.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="education-section" id="education">
      <header class="section-heading">
        <p class="section-index">01 / Background</p>
        <div>
          <h2>Education &<br>experience.</h2>
          <p>Where I have learned, built, and made an impact.</p>
        </div>
      </header>

      <div *ngIf="experiences.length; else emptyState" class="timeline">
        <article *ngFor="let exp of sortedExperiences; let index = index" class="timeline-entry">
          <div class="entry-number">0{{ index + 1 }}</div>
          <div class="entry-date">
            {{ exp.start_date }}<span>—</span>{{ exp.is_current ? 'Present' : exp.end_date }}
          </div>
          <div class="entry-content">
            <p class="entry-type">{{ exp.exp_type || 'Experience' }}</p>
            <h3>{{ exp.title }}</h3>
            <p class="organisation">{{ exp.organization }}</p>
            <p *ngIf="exp.description" class="description">{{ exp.description }}</p>
          </div>
        </article>
      </div>

      <ng-template #emptyState>
        <div class="empty-state">
          <span>+</span>
          <p>No education or experience entries yet.</p>
        </div>
      </ng-template>
    </section>
  `,
  styles: [`
    :host { display: block; color: #111; }
    .education-section { overflow: hidden; background: #e0e0df; }
    .section-heading { display: grid; grid-template-columns: minmax(9rem, 28%) 1fr; gap: 2rem; padding: clamp(2.5rem, 7vw, 6rem); border-bottom: 1px solid #aaa; }
    .section-index, .entry-type { margin: 0; font-size: .68rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
    h2 { margin: 0; font-size: clamp(3rem, 7vw, 6.7rem); font-weight: 700; letter-spacing: -.075em; line-height: .84; }
    .section-heading div > p { max-width: 28rem; margin: 1.6rem 0 0; color: #555; line-height: 1.55; }
    .timeline-entry { display: grid; grid-template-columns: minmax(4rem, 12%) minmax(10rem, 24%) 1fr; gap: 1.5rem; padding: 2.25rem clamp(2.5rem, 7vw, 6rem); border-bottom: 1px solid #aaa; transition: background .2s; }
    .timeline-entry:hover { background: #111; color: #fff; }
    .entry-number { font-size: .78rem; font-weight: 800; }
    .entry-date { display: flex; flex-direction: column; gap: .2rem; color: #555; font-size: .78rem; font-weight: 700; line-height: 1.3; }
    .timeline-entry:hover .entry-date, .timeline-entry:hover .organisation, .timeline-entry:hover .description { color: #bbb; }
    .entry-content { max-width: 45rem; }
    .entry-type { margin-bottom: .65rem; color: #686868; }
    h3 { margin: 0; font-size: clamp(1.55rem, 3vw, 2.7rem); letter-spacing: -.045em; line-height: 1; }
    .organisation { margin: .55rem 0 0; color: #555; font-weight: 700; }
    .description { margin: 1rem 0 0; color: #4f4f4f; line-height: 1.6; }
    .empty-state { display: flex; align-items: center; gap: 1rem; min-height: 13rem; padding: 2.5rem; border-bottom: 1px solid #aaa; color: #555; }
    .empty-state span { display: grid; place-items: center; width: 2.6rem; height: 2.6rem; border: 1px solid #888; color: #111; font-size: 1.5rem; }
    @media (max-width: 640px) { .section-heading { grid-template-columns: 1fr; gap: 2rem; } .timeline-entry { grid-template-columns: 3rem 1fr; gap: 1rem; } .entry-date { grid-column: 2; flex-direction: row; } .entry-content { grid-column: 2; } }
  `]
})
export class EducationComponent {
  @Input() experiences: Experience[] = [];

  get sortedExperiences(): Experience[] {
    return [...this.experiences].sort((a, b) =>
      new Date(b.start_date).getTime() - new Date(a.start_date).getTime()
    );
  }
}
