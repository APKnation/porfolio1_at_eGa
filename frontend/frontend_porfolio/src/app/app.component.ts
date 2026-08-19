import { Component, OnInit } from '@angular/core';
import { PortfolioApiService } from './services/portfolio-api.service';
import { Profile } from './models/portfolio.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend_porfolio';
  profile: Profile = {
    experiences: [],
    projects: [],
    skills: [],
    educations: []
  };
  apiError: string | null = null;

  constructor(private portfolioApiService: PortfolioApiService) {}

  ngOnInit(): void {
    this.portfolioApiService.getProfiles().subscribe({
      next: (profiles) => {
        if (profiles && profiles.length > 0) {
          this.profile = profiles[0];
        }
      },
      error: (error) => {
        console.error('Error fetching profiles:', error);
        this.apiError = 'Failed to load profile data. Please try again later.';
      }
    });
  }
}
