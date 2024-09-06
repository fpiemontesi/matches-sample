import { Component, EventEmitter, Output } from '@angular/core';
import { Match } from '../models/match';
import { FormsModule, NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';

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
  @Output() onSave = new EventEmitter<Match>();

  save(form: NgForm) {
    if (form.invalid) {
      alert("Formulario invalido");
      console.log(form)
      return;
    }

    // this.onSave.emit(this.match);
    this.onSave.emit(form.value);
    form.reset();
  }
}
