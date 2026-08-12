import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Profile } from '../../models/portfolio.model';

@Component({
  selector: 'app-contact-form-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4">
      <div class="w-full max-w-xl rounded-[2rem] bg-white p-6 shadow-2xl ring-1 ring-slate-200">
        <h3 class="text-xl font-semibold text-slate-950">Contact information</h3>
        <p class="mt-1 text-sm text-slate-500">Contact details are managed by a Django superuser.</p>

        <div class="mt-6 grid gap-3 text-sm text-slate-700">
          <p *ngIf="profile.email">{{ profile.email }}</p>
          <p *ngIf="profile.phone">{{ profile.phone }}</p>
          <p *ngIf="profile.location">{{ profile.location }}</p>
        </div>
      </div>
    </div>
  `
})
export class ContactFormModalComponent {
  @Input() isOpen = false;
  @Input() profile: Profile = { experiences: [], projects: [], skills: [] };
}
