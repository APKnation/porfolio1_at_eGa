import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Skill } from '../../models/portfolio.model';

@Component({
  selector: 'skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent {
  @Input() skills: Skill[] = [];
}
