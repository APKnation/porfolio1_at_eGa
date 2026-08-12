import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Skill } from '../../models/portfolio.model';

@Component({
  selector: 'skills-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="space-y-6" id="skills">
      <div class="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/30 sm:p-10">
        <div class="space-y-3">
          <h2 class="text-3xl font-semibold text-white">Skills</h2>
          <p class="text-slate-300">Share the tools and technologies you use most, with clean badges for quick scanning.</p>
        </div>
      </div>

      <div *ngIf="skills.length; else emptyState" class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <span *ngFor="let skill of skills" class="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100 shadow-sm shadow-slate-950/10 transition hover:border-sky-500 hover:bg-sky-500/10">
          {{ skill.name }}<span *ngIf="skill.level" class="text-slate-400"> · {{ skill.level }}</span>
        </span>
      </div>

      <ng-template #emptyState>
        <div class="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 text-slate-400 shadow-xl shadow-slate-950/10">
          No skills added yet.
        </div>
      </ng-template>
    </section>
  `,  styles: [
    `:host { display: block; }`
  ]
})
export class SkillsSectionComponent {
  @Input() skills: Skill[] = [];
}
