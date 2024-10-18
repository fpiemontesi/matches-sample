import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { DateValidator } from '../validators/date.validator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-match-reports',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './match-reports.component.html',
  styleUrl: './match-reports.component.css'
})
export class MatchReportsComponent implements OnInit {
  dateControl = new FormControl("", [
    Validators.required, 
    DateValidator.greaterThanToday
  ]);

  ngOnInit(): void {
    this.dateControl.valueChanges.subscribe({
      next: (value) => {
        console.log(value)
      }
    })
  }
}
