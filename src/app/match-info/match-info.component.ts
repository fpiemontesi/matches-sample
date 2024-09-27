import { DatePipe } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { MatchService } from '../services/match.service';

@Component({
  selector: 'app-match-info',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './match-info.component.html',
  styleUrl: './match-info.component.css'
})
export class MatchInfoComponent 
  implements OnDestroy, OnChanges
{
  ngOnChanges(changes: SimpleChanges): void {
    console.log("MATCH INFO INPUT CHANGE: ", changes)
  }
  ngOnDestroy(): void {
    alert('destruido')
  }
  @Input() index: number = 0;
  @Input() local: string = "";
  @Input() visitor: string = "";
  @Input() localScore: number = 0;
  @Input() visitorScore: number = 0;
  @Input() date?: Date;
  @Output() selectedMatch = new EventEmitter<number>();
  @Output() deletedMatch = new EventEmitter<void>();

  private matchService = inject(MatchService);

  showMatch() {
    this.selectedMatch.emit(this.index);
    this.matchService.setSelectedMatch(
      this.local + " vs " + this.visitor
    );
  }

  deleteMatch() {
    this.matchService.delete(this.index);
    this.deletedMatch.emit();
  }
}
