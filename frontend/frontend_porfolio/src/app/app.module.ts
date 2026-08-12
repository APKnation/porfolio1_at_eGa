import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { Profile } from './models/portfolio.model';
import { PortfolioApiService } from './services/portfolio-api.service';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    CommonModule,
    NavbarComponent,
    EducationComponent,
    ProjectsComponent,
    SkillsSectionComponent
  ],

  template: `
    <div class="min-h-screen bg-slate-950 text-slate-100">
      <app-navbar
        [profile]="profile">
      </app-navbar>

      <main class="mx-auto max-w-6xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
        <p *ngIf="apiError" class="rounded-xl border border-rose-400/50 bg-rose-950/50 px-4 py-3 text-sm text-rose-100" role="alert">
          {{ apiError }}
        </p>

        <app-education
          [experiences]="profile.experiences">
        </app-education>

        <app-projects
          [projects]="profile.projects">
        </app-projects>

        <skills-section
          [skills]="profile.skills">
        </skills-section>
      </main>
    </div>
  `
})
export class AppComponent implements OnInit, OnDestroy {

  profile: Profile = {
    name: 'Atanas Kafuka',
    title: 'Software Engineering Student',
    experiences: [],
    projects: [],
    skills: []
  };

  apiError = '';
  private refreshHandle: number | undefined;

  constructor(private readonly portfolioApi: PortfolioApiService) {}

  ngOnInit(): void {
    this.loadProfile();
    this.refreshHandle = window.setInterval(() => this.loadProfile(false), 30000);
  }

  ngOnDestroy(): void {
    if (this.refreshHandle) {
      window.clearInterval(this.refreshHandle);
    }
  }

  private loadProfile(showError = true): void {
    this.portfolioApi.getProfiles().subscribe({
      next: (profiles) => {
        this.apiError = '';
        if (profiles.length) {
          this.profile = profiles[0];
        }
      },
      error: () => {
        if (showError) {
          this.apiError = 'Unable to load the backend API. Start Django on port 8000.';
        }
      }
    });
  }
}
