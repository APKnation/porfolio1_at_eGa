import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-action',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="rounded-[2rem] border border-slate-800/60 bg-slate-950/90 p-8 text-slate-100 shadow-2xl shadow-slate-950/40 backdrop-blur-xl sm:p-10">
      <p class="inline-flex rounded-full bg-sky-500/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-sky-300">Portfolio</p>
      <h2 class="mt-5 text-3xl font-semibold text-white sm:text-4xl">Portfolio content is read-only here</h2>
      <p class="mt-3 max-w-2xl text-slate-400">Updates are managed by a Django superuser and reflected here from the backend data.</p>
    </div>
  `,
  styles: [
    ':host { display: block; }'
  ]
})
export class ActionComponent {}
