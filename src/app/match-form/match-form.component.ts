import { Component, EventEmitter, inject, OnDestroy, Output } from '@angular/core';
import { Match } from '../models/match';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
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
  form = new UntypedFormGroup({
    local: new UntypedFormControl("", [Validators.required]),
    visitor: new UntypedFormControl("", [Validators.required]),
    localScore: new UntypedFormControl(0, [Validators.required]),
    visitorScore: new UntypedFormControl(0, [Validators.required, Validators.min(4)]),
    date: new UntypedFormControl(),
    events: new UntypedFormArray([])
  });

  private matchService = inject(MatchService);
  private visualizerService = inject(VisualizerService);
  private readonly matchApiService = inject(MatchApiService);
  private readonly router = inject(Router);

  get events() {
    return this.form.controls["events"] as UntypedFormArray;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onNewEvent() {
    const formArray = this.form.controls["events"] as FormArray;
    const eventForm = new FormGroup({
      minutes: new FormControl("", [Validators.required]),
      seconds: new FormControl("", [Validators.required])
    });
    formArray.push(eventForm);
  }

  onDeleteEvent(index: number) {
    this.events.removeAt(index);
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
    const match: Match = this.form.value;
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
