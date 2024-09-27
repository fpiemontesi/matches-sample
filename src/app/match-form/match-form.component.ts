import { Component, EventEmitter, inject, OnDestroy, Output } from '@angular/core';
import { Match } from '../models/match';
import { FormsModule, NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatchService } from '../services/match.service';
import { VisualizerService } from '../services/visualizer.service';
import { MatchApiService } from '../services/match-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-match-form',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './match-form.component.html',
  styleUrl: './match-form.component.css'
})
export class MatchFormComponent implements OnDestroy {
  match: Match = {
    local: '',
    visitor: '',
    localScore: 0,
    visitorScore: 0,
    date: new Date()
  };
  today = new Date();
  @Output() onSave = new EventEmitter();
  subscription = new Subscription();

  private matchService = inject(MatchService);
  private visualizerService = inject(VisualizerService);
  private readonly matchApiService = inject(MatchApiService);

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  save(form: NgForm) {
    if (form.invalid) {
      alert("Formulario invalido");
      console.log(form)
      return;
    }

    // this.onSave.emit(this.match);
    const copyMatch = {
      ...this.match
    }
    // this.matchService.add(copyMatch);
    const addSubscription = this.matchApiService.add(copyMatch).subscribe({
      next: () => {
        this.onSave.emit();
        form.reset();
        this.visualizerService.toggleShowForm();
      },
      error: (err) => {
        alert('Error al comunicarse con la API')
      }
    });
    this.subscription.add(addSubscription);
  }
}
