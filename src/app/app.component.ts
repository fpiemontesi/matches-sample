import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatchesComponent } from './matches/matches.component';
import { MatchesViewComponent } from './matches-view/matches-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MatchesComponent, 
    MatchesViewComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'matches';
}
