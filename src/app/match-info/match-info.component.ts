import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'app-match-info',
  standalone: true,
  imports: [],
  templateUrl: './match-info.component.html',
  styleUrl: './match-info.component.css'
})
export class MatchInfoComponent 
  implements OnDestroy
{
  ngOnDestroy(): void {
    alert('destruido')
  }
  @Input() match: string = "";
  @Output() selectedMatch = new EventEmitter<string>();

  mostrarPartido() {
    this.selectedMatch.emit(this.match);
  }
}
