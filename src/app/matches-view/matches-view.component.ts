import { Component, inject, OnInit } from '@angular/core';
import { MatchInfoComponent } from '../match-info/match-info.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Match } from '../models/match';
import { MatchFormComponent } from '../match-form/match-form.component';
import { MatchService } from '../services/match.service';
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

  // private matchService: MatchService = inject(MatchService);
  constructor(private matchService: MatchService) {}

  ngOnInit(): void {
    this.loadMatches();
  }

  loadMatches() {
    this.matches = this.matchService.getAll();
  }

  onSelected(selectedIndex: number) {
    this.matchSelected = this.matches[selectedIndex];
  }

  onDeleteLastItem() {
    this.matchService.deleteLast();
    this.loadMatches();
  }

  addNewMatch(newMatch: Match) {
  }

  onDeleted(index: number) {
    this.loadMatches();
  }
}
