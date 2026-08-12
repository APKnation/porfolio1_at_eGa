import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from '../../models/portfolio.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="navbar-header sticky top-0 z-30 bg-slate-950/95 text-white shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
      <div class="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <a href="#" class="text-lg font-semibold tracking-wide text-white">Atanas Kafuka</a>

          <nav class="flex flex-wrap items-center justify-center gap-2">
            <a href="#education" class="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/10">Education</a>
            <a href="#projects" class="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/10">Projects</a>
            <a href="#skills" class="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/10">Skills</a>
          </nav>

        </div>
      </div>
    </header>

    <section class="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div class="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 text-center backdrop-blur-xl shadow-xl shadow-slate-950/20 sm:p-10 lg:p-12">
        <p class="inline-flex rounded-full bg-sky-500/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-sky-200">Portfolio</p>
        <h1 class="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{{ profile.full_name || profile.name }}</h1>
        <p class="mx-auto mt-4 max-w-2xl text-lg text-slate-300">{{ profile.title }}</p>
        <p class="mx-auto mt-4 max-w-3xl text-slate-400">{{ profile.bio }}</p>

        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <span *ngIf="profile.email" class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">📧 {{ profile.email }}</span>
          <span *ngIf="profile.phone" class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">📱 {{ profile.phone }}</span>
          <span *ngIf="profile.location" class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">📍 {{ profile.location }}</span>
        </div>

        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <a *ngIf="profile.linkedin" [href]="profile.linkedin" target="_blank" class="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10">LinkedIn</a>
          <a *ngIf="profile.github" [href]="profile.github" target="_blank" class="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10">GitHub</a>
          <a *ngIf="profile.website" [href]="profile.website" target="_blank" class="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10">Website</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    .navbar-header {
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
      position: relative;
      overflow: hidden;
    }
    .navbar-header::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: radial-gradient(circle at 0 0, rgba(255,255,255,0.05) 1px, transparent 0);
      background-size: 24px 24px;
      opacity: 0.35;
    }
    .navbar-header > div {
      position: relative;
      z-index: 1;
    }
  `]
})
export class NavbarComponent {
  @Input() profile: Profile = {
    experiences: [],
    projects: [],
    skills: []
  };
}
