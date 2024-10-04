import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { VisualizerService } from './services/visualizer.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterModule
  ],
  providers: [VisualizerService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'matches';
}
