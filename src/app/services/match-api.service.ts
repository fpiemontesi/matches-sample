import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from '../models/match';

@Injectable({
  providedIn: 'root'
})
export class MatchApiService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly url = 'https://6317ca93f6b281877c5d7785.mockapi.io/teams';

  constructor() { }

  getAll(): Observable<Match[]> {
    const observable = this.http.get<Match[]>(this.url);
    return observable;
  }

  add(match: Match): Observable<Match> {
    return this.http.post<Match>(
      this.url, match
    )
  }

  getById(id: string): Observable<Match> {
    return this.http.get<Match>(
      `${this.url}/${id}`
    );
  }
}
