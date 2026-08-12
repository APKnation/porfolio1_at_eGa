import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../models/portfolio.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="space-y-8" id="education">
      <div class="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <h2 class="text-3xl font-semibold text-slate-950">🎓 Education & Experience</h2>
          <p class="mt-2 max-w-2xl text-slate-600">Record your education and work experience to highlight your most meaningful achievements.</p>
        </div>
      </div>

      <div *ngIf="experiences.length; else emptyState" class="space-y-4">
        <div *ngFor="let exp of sortedExperiences" class="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40 transition hover:-translate-y-0.5">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div class="space-y-1">
              <h3 class="text-xl font-semibold text-slate-950">{{ exp.title }}</h3>
              <p class="text-sm text-slate-500">{{ exp.organization }}</p>
            </div>
            <div class="flex flex-wrap items-center gap-3">
              <span class="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700">{{ exp.exp_type }}</span>
            </div>
          </div>

          <p class="text-slate-600">{{ exp.description }}</p>
          <p class="mt-3 text-sm text-slate-500">
            📅 {{ exp.start_date | date:'MMM yyyy' }} —
            {{ exp.is_current ? 'Present' : (exp.end_date | date:'MMM yyyy') }}
          </p>
        </div>
      </div>

      <ng-template #emptyState>
        <div class="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 text-slate-600">
          No education or experience entries yet.
        </div>
      </ng-template>
    </section>
  `,
  styles: [`
    :host { display: block; }
    .timeline { position: relative; padding-left: 24px; }
    .timeline::before {
      content: ''; position: absolute; left: 6px; top: 8px; bottom: 8px;
      width: 2px; background: #dee2e6;
    }
    .timeline-item { position: relative; }
    .timeline-item::before {
      content: ''; position: absolute; left: -22px; top: 20px;
      width: 10px; height: 10px; border-radius: 50%;
      background: #0d6efd; border: 2px solid #fff;
      box-shadow: 0 0 0 2px #0d6efd;
    }
    .card { transition: transform 0.2s, box-shadow 0.2s; }
    .card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.1) !important; }
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
