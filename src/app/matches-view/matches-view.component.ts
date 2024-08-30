import { Component, OnInit } from '@angular/core';
import { MatchInfoComponent } from '../match-info/match-info.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Match } from '../models/match';
// import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-matches-view',
  standalone: true,
  imports: [MatchInfoComponent
    // , NgIf, NgFor
    , CommonModule
    , FormsModule
  ],
  templateUrl: './matches-view.component.html',
  styleUrl: './matches-view.component.css'
})
export class MatchesViewComponent
  implements OnInit {
  matches: Match[] = [];
  matchSelected: string = "";
  myDate: Date = new Date();

  ngOnInit(): void {
    this.matches = [
      {
        name: "Equipo1 vs Equipo2",
      },
      {
        name: "Equipo3 vs Equipo4"
      }
    ];
  }

  onSelected(selected: string) {
    this.matchSelected = selected;
  }

  onDeleteLastItem() {
    this.matches.pop();
  }
}
