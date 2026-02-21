import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TraitPicker } from './trait-picker/trait-picker';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    TraitPicker,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('aria-tools');
}
