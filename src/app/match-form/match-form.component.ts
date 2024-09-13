import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Match } from '../models/match';
import { FormsModule, NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatchService } from '../services/match.service';
import { VisualizerService } from '../services/visualizer.service';

@Component({
  selector: 'app-match-form',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './match-form.component.html',
  styleUrl: './match-form.component.css'
})
export class MatchFormComponent {
  match: Match = {
    local: '',
    visitor: '',
    localScore: 0,
    visitorScore: 0,
    date: new Date()
  };
  today = new Date();
  @Output() onSave = new EventEmitter();

  private matchService = inject(MatchService);
  private visualizerService = inject(VisualizerService);

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
    this.matchService.add(copyMatch);
    this.onSave.emit();
    form.reset();
    this.visualizerService.toggleShowForm();
  }
}
