import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from '../../models/portfolio.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero">
      <div class="hero-copy">
        <a class="brand" href="#top" aria-label="Home">{{ initials }}</a>
        <div class="intro">
          <p class="greeting">Hello, I am</p>
          <h1>{{ profile.full_name || profile.name || 'Your name' }}</h1>
          <p class="role">{{ profile.title || 'Your professional title' }}</p>
          <p *ngIf="profile.bio" class="bio">{{ profile.bio }}</p>
          <div class="social-links" aria-label="Social links">
            <a *ngIf="profile.linkedin" [href]="profile.linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
            <a *ngIf="profile.github" [href]="profile.github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">gh</a>
            <a *ngIf="profile.website" [href]="profile.website" target="_blank" rel="noopener noreferrer" aria-label="Personal website">↗</a>
          </div>
        </div>
      </div>

      <div class="hero-photo">
        <nav aria-label="Main navigation">
          <a href="#education">About me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Portfolio</a>
          <a *ngIf="profile.email" class="contact" [href]="'mailto:' + profile.email">Contact me</a>
        </nav>
        <img *ngIf="profile.image; else imagePlaceholder" [src]="profile.image" [alt]="(profile.full_name || profile.name || 'Profile') + ' portrait'">
        <ng-template #imagePlaceholder>
          <div class="image-placeholder" aria-label="Profile image placeholder">{{ initials }}</div>
        </ng-template>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; background: #f8f8f7; }
    .hero { display: grid; grid-template-columns: minmax(0, 46%) 1fr; min-height: min(720px, 100vh); overflow: hidden; background: #050505; }
    .hero-copy { position: relative; z-index: 2; display: flex; flex-direction: column; padding: 2rem clamp(2rem, 7vw, 7rem) 3.5rem; color: #111; background: #dedede; clip-path: polygon(0 0, 100% 0, calc(100% - 5.5rem) 100%, 0 100%); }
    .brand { display: grid; place-items: center; width: 2.4rem; height: 2.4rem; border: 2px solid #111; color: #111; font-size: .78rem; font-weight: 800; letter-spacing: -.08em; text-decoration: none; transform: rotate(-8deg); }
    .intro { margin: auto 0; padding: 4rem 4rem 0 0; }
    .greeting { margin: 0 0 1.6rem; font-size: 1.15rem; font-weight: 700; }
    h1 { max-width: 12ch; margin: 0; font-size: clamp(2.75rem, 5vw, 5.4rem); font-weight: 700; letter-spacing: -.065em; line-height: .98; }
    .role { margin: .65rem 0 0; color: #727272; font-size: clamp(.9rem, 1.35vw, 1.2rem); font-weight: 700; }
    .bio { max-width: 36rem; margin: 1.25rem 0 0; color: #4f4f4f; line-height: 1.6; }
    .social-links { display: flex; gap: .8rem; margin-top: 2.5rem; }
    .social-links a { display: grid; place-items: center; min-width: 2.5rem; height: 2.5rem; border: 1px solid #bdbdbd; color: #111; background: #d3d3d3; box-shadow: 0 3px 0 #aaa; font-size: .8rem; font-weight: 800; text-decoration: none; text-transform: uppercase; transition: transform .2s, background .2s; }
    .social-links a:hover { background: #fff; transform: translateY(-2px); }
    .hero-photo { position: relative; display: flex; align-items: flex-end; justify-content: center; min-height: 31rem; overflow: hidden; background: #050505; }
    nav { position: absolute; z-index: 2; top: 1.5rem; right: clamp(1rem, 5vw, 4rem); display: flex; align-items: center; gap: clamp(.8rem, 2.3vw, 2.75rem); }
    nav a { color: #fff; font-size: .7rem; font-weight: 700; text-decoration: none; white-space: nowrap; }
    nav .contact { padding: .72rem 1.15rem; border-radius: 999px; color: #111; background: #fff; text-transform: uppercase; font-size: .62rem; }
    .hero-photo img { position: relative; z-index: 1; width: min(90%, 44rem); max-height: 90%; object-fit: contain; object-position: bottom center; align-self: end; filter: drop-shadow(-18px 0 18px rgba(0,0,0,.35)); }
    .image-placeholder { display: grid; place-items: center; width: clamp(15rem, 28vw, 29rem); aspect-ratio: .72; margin-bottom: 0; border-radius: 50% 50% 0 0; color: #dadada; background: radial-gradient(circle at 50% 30%, #555 0 20%, #242424 21% 47%, #111 48%); font-size: 4rem; font-weight: 700; }
    @media (max-width: 720px) { .hero { grid-template-columns: 1fr; } .hero-copy { min-height: 31rem; padding: 1.5rem 2rem 3rem; clip-path: none; } .intro { padding: 2rem 0 0; } .hero-photo { min-height: 28rem; } nav { top: 1rem; right: 1rem; left: 1rem; gap: .8rem; justify-content: space-between; } nav a { font-size: .62rem; } nav .contact { padding: .55rem .75rem; } }
  `]
})
export class NavbarComponent {
  @Input() profile: Profile = {
    experiences: [],
    projects: [],
    skills: []
  };

  get initials(): string {
    const name = this.profile.full_name || this.profile.name || 'P';
    return name.split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join('').toUpperCase();
  }
}
