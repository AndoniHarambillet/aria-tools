import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TraitParent } from './trait-parent/trait-parent';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    TraitParent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('aria-tools');
}
