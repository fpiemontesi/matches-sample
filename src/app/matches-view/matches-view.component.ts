import { Component, OnInit } from '@angular/core';
import { MatchInfoComponent } from '../match-info/match-info.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Match } from '../models/match';
import { MatchFormComponent } from '../match-form/match-form.component';
// import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-matches-view',
  standalone: true,
  imports: [MatchInfoComponent
    // , NgIf, NgFor
    , CommonModule
    , FormsModule,
    MatchFormComponent
  ],
  templateUrl: './matches-view.component.html',
  styleUrl: './matches-view.component.css'
})
export class MatchesViewComponent
  implements OnInit {
  matches: Match[] = [];
  matchSelected?: Match;
  myDate: Date = new Date();

  ngOnInit(): void {
    this.matches = [
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
  }

  onSelected(selectedIndex: number) {
    this.matchSelected = this.matches[selectedIndex];
  }

  onDeleteLastItem() {
    this.matches.pop();
  }

  addNewMatch(newMatch: Match) {
    this.matches.push(newMatch);
  }
}
