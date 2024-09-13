import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Match } from '../models/match';
import { FormsModule, NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatchService } from '../services/match.service';

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
  @Output() onSave = new EventEmitter<Match>();

  private matchService = inject(MatchService);

  save(form: NgForm) {
    if (form.invalid) {
      alert("Formulario invalido");
      console.log(form)
      return;
    }

    // this.onSave.emit(this.match);
    this.matchService.add(form.value);
    this.onSave.emit(form.value);
    form.reset();
  }

  onDateChange(date: string) {
    this.match.date = new Date(date);
  }
}
