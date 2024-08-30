import { Component } from '@angular/core';
import { MatchSelectorComponent } from '../match-selector/match-selector.component';

@Component({
  selector: 'app-match',
  standalone: true,
  imports: [MatchSelectorComponent],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css'
})
export class MatchesComponent {
  texto: string = "";
  visualizarTexto: string = "";

  cambiarTexto(nombre: string) {
    this.texto = "nuevo texto" + nombre;
  }

  textChanged(event: any) {
    console.log(event.target.value);
    this.visualizarTexto = event.target.value;
  }
}
