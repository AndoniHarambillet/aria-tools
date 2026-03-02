import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Trait } from './models/trait-model';

interface ApiResponse<T> {
  data?: T;
  error?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AriaApiService {
  private apiLocation = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllTraits(): Observable<Trait[]> {
    return this.http.get<Trait[]>(`${this.apiLocation}/api/allTraits`).pipe((value) => {
      return value;
    });
  }

  getAllSkills(): Observable<any> {
    return this.http.get(`${this.apiLocation}/api/allSkills`).pipe(
      catchError((error) => {
        console.error('Failed to fetch skills', error);
        return of(null);
      }),
    );
  }

  getAllItems(): Observable<any> {
    return this.http.get(`${this.apiLocation}/api/allItems`).pipe(
      catchError((error) => {
        console.error('Failed to fetch items', error);
        return of(null);
      }),
    );
  }

  fetchAllEndpoints(): Observable<any> {
    return forkJoin({
      traits: this.getAllTraits(),
      skills: this.getAllSkills(),
      items: this.getAllItems(),
    }).pipe(
      catchError((error) => {
        console.error('Failed to fetch all endpoints', error);
        return of(null);
      }),
    );
  }
}
