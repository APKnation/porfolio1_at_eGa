import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioApiService } from '../../services/portfolio-api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  status: 'idle' | 'submitting' | 'success' | 'error' = 'idle';

  constructor(private fb: FormBuilder, private apiService: PortfolioApiService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.status = 'submitting';
    this.apiService.sendMessage(this.contactForm.value).subscribe({
      next: () => {
        this.status = 'success';
        this.contactForm.reset();
        setTimeout(() => this.status = 'idle', 5000);
      },
      error: () => {
        this.status = 'error';
        setTimeout(() => this.status = 'idle', 5000);
      }
    });
  }
}
