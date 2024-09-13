import { Component, inject, OnInit } from '@angular/core';
import { MatchInfoComponent } from '../match-info/match-info.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Match } from '../models/match';
import { MatchFormComponent } from '../match-form/match-form.component';
import { MatchService } from '../services/match.service';
import { VisualizerService } from '../services/visualizer.service';
import { Configuration } from '../models/configuration';
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
  providers: [VisualizerService],
  templateUrl: './matches-view.component.html',
  styleUrl: './matches-view.component.css'
})
export class MatchesViewComponent
  implements OnInit {
  matches: Match[] = [];
  matchSelected?: Match;
  myDate: Date = new Date();
  config?: Configuration;

  // private matchService: MatchService = inject(MatchService);
  constructor(private matchService: MatchService,
    private visualizerService: VisualizerService
  ) {}

  ngOnInit(): void {
    this.loadMatches();
    this.config = this.visualizerService.getConfiguration();
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

  onNew() {
    this.visualizerService.toggleShowForm();
  }

  onDeleted() {
    this.loadMatches();
  }
}
