import { NgStyle, UpperCasePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatchService } from '../services/match.service';

@Component({
  selector: 'app-match-selector',
  standalone: true,
  imports: [
    NgStyle, UpperCasePipe
  ],
  templateUrl: './match-selector.component.html',
  styleUrl: './match-selector.component.css'
})
export class MatchSelectorComponent implements OnInit {
  matchSelected: string = '';

  private readonly matchService = inject(MatchService);

  ngOnInit(): void {
    // this.listenSelectedMatch();
  }

  subscribeToMatchSelected() {
    this.listenSelectedMatch();
  }

  private listenSelectedMatch() {
    const selectedMatches = this.matchService.getSelectedMatch();
    const subscription = selectedMatches.subscribe({
      next: (match: string) => {
        this.matchSelected = match;
      }
    });
  }
}
