import { NgStyle, UpperCasePipe } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { MatchService } from '../services/match.service';
import { ActivatedRoute } from '@angular/router';
import { MatchApiService } from '../services/match-api.service';
import { Match } from '../models/match';

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
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly matchApiService = inject(MatchApiService);

  // angular v18
  @Input() set id(id: string) {
    this.getMatch(id);
  }

  @Input() set name(name: string) {
    alert("Name param value is: " + name)
  }

  ngOnInit(): void {
    // this.listenSelectedMatch();
    // alert('VALOR SELECCIONADO: ' + this.activatedRoute.snapshot.params['id']);
    const id = this.activatedRoute.snapshot.params['id'];
    this.getMatch(id);

    // const name = this.activatedRoute.snapshot.queryParams['name'];
    // alert("Name param value is: " + name)
  }

  getMatch(id: string) {
    this.matchApiService.getById(id).subscribe({
      next: (match: Match) => {
        this.matchSelected = `${match.local} vs ${match.visitor}`;
      }
    });
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
