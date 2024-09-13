import { Injectable } from '@angular/core';
import { Match } from '../models/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private matches: Match[] = [
    {
      local: "Equipo1",
      visitor: "Equipo2",
      localScore: 1,
      visitorScore: 2
    },
    {
      local: "Equipo3",
      visitor: "Equipo4",
      localScore: 3,
      visitorScore: 0,
      date: new Date()
    }
  ];

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
}
