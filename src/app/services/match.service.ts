import { Injectable } from '@angular/core';
import { Match } from '../models/match';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private matches: Match[] = [
    {
      id: "",
      local: "Equipo1",
      visitor: "Equipo2",
      localScore: 1,
      visitorScore: 2
    },
    {
      id: "",
      local: "Equipo3",
      visitor: "Equipo4",
      localScore: 3,
      visitorScore: 0,
      date: new Date()
    }
  ];
  private matchSelectedSubject = new Subject<string>();

  getAll(): Match[] {
    return [
      ...this.matches 
    ];
  }

  deleteLast() {
    this.matches.pop();
  }

  delete(index: number) {
    this.matches.splice(index, 1);
  }

  add(match: Match) {
    this.matches.push(match);
  }

  // send values
  setSelectedMatch(selectedMatch: string) {
    this.matchSelectedSubject.next(selectedMatch);
  }

  // listen values
  getSelectedMatch(): Observable<string> {
    const observable = this.matchSelectedSubject.asObservable();
    return observable;
  }
}
