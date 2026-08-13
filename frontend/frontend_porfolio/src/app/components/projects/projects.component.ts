import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from '../../models/portfolio.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  @Input() projects: Project[] = [];
}
