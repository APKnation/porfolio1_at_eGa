import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { ContactComponent } from './components/contact/contact.component';
import { Profile } from './models/portfolio.model';
import { PortfolioApiService } from './services/portfolio-api.service';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    CommonModule,
    NavbarComponent,
    HomeComponent,
    EducationComponent,
    ProjectsComponent,
    SkillsSectionComponent,
    ContactComponent
  ],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
