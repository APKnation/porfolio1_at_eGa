import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioApiService {
  private readonly apiUrl = 'https://apknation-portfolio.onrender.com/api';

  constructor(private readonly http: HttpClient) {}

  getProfiles(): Observable<Profile[]> { return this.http.get<Profile[]>(`${this.apiUrl}/profiles/`); }
  sendMessage(data: any): Observable<any> { return this.http.post(`${this.apiUrl}/contact/`, data); }
}
