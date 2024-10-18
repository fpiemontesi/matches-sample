import { Component, EventEmitter, inject, OnDestroy, Output } from '@angular/core';
import { Match } from '../models/match';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePipe, JsonPipe } from '@angular/common';
import { MatchService } from '../services/match.service';
import { VisualizerService } from '../services/visualizer.service';
import { MatchApiService } from '../services/match-api.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-form',
  standalone: true,
  imports: [FormsModule, DatePipe, JsonPipe, ReactiveFormsModule],
  templateUrl: './match-form.component.html',
  styleUrl: './match-form.component.css'
})
export class MatchFormComponent implements OnDestroy {
  today = new Date();
  @Output() onSave = new EventEmitter();
  subscription = new Subscription();
  form = new FormGroup({
    local: new FormControl("", [Validators.required]),
    visitor: new FormControl("", [Validators.required]),
    localScore: new FormControl(0, [Validators.required]),
    visitorScore: new FormControl(0, [Validators.required, Validators.min(4)]),
    date: new FormControl()
  })

  private matchService = inject(MatchService);
  private visualizerService = inject(VisualizerService);
  private readonly matchApiService = inject(MatchApiService);
  private readonly router = inject(Router);

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  save() {
    if (this.form.invalid) {
      alert("Formulario invalido");
      console.log(this.form)
      return;
    }

    // this.onSave.emit(this.match);
    // const copyMatch = {
    //   ...this.match
    // }
    // this.matchService.add(copyMatch);
    const match = this.form.value as Match;
    const addSubscription = this.matchApiService.add(match).subscribe({
      next: () => {
        this.router.navigate(['list']);
      },
      error: (err) => {
        alert('Error al comunicarse con la API')
      }
    });
    this.subscription.add(addSubscription);
  }
}
