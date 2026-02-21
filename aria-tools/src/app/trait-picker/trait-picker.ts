import { Component } from '@angular/core';
import { Trait } from '../models/trait-model';
import { map, Observable, startWith } from 'rxjs';
import { AriaApiService } from '../aria-api.service';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { CommonModule, AsyncPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-trait-picker',
  imports: [
    MatButtonModule,
    MatIconModule,
    AsyncPipe,
    CommonModule,
  ],
  templateUrl: './trait-picker.html',
  styleUrl: './trait-picker.scss',
  standalone: true,
})
export class TraitPicker {
  filteredTraits$: Observable<Trait[]>;

  constructor(private ariaApiService: AriaApiService) {
    this.filteredTraits$ = this.ariaApiService.getAllTraits().pipe(
      map((response: Trait[]) => {
        return response;
      }),
      startWith([] as Trait[])
    );
  }

  ngOnInit(): void {
  }
}
