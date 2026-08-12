import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioApiService {
  private readonly apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private readonly http: HttpClient) {}

  getProfiles(): Observable<Profile[]> { return this.http.get<Profile[]>(`${this.apiUrl}/profiles/`); }
}
