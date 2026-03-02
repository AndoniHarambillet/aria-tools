import { Component } from '@angular/core';
import { TraitPicker } from '../trait-picker/trait-picker';
import { AriaApiService } from '../aria-api.service';
import { BehaviorSubject, EMPTY, map, Observable } from 'rxjs';
import { Trait } from '../models/trait-model';
import { TraitHolder } from '../trait-holder/trait-holder';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-trait-parent',
  imports: [TraitPicker, TraitHolder, AsyncPipe],
  templateUrl: './trait-parent.html',
  styleUrl: './trait-parent.scss',
})
export class TraitParent {
  private readonly EMPTY_TRAIT: Trait = {
    id: -1,
    name: '-',
    description: 'No traits selected',
    weight: 0,
    modifiers: {
      modifierStr: 0,
      modifierEnd: 0,
      modifierCha: 0,
      modifierDex: 0,
      modifierArmor: 0,
      modifierHp: 0,
      modifierInt: 0,
      modifierSens: 0,
      additionalModifier: '',
    },
  };
  allTraits$: Observable<Trait[]>;

  private displayedTraitsSubject: BehaviorSubject<Trait[]> = new BehaviorSubject<Trait[]>([]);
  private selectedTraitsSubject: BehaviorSubject<Trait[]> = new BehaviorSubject<Trait[]>([]);
  displayedTraits$: Observable<Trait[]> = this.displayedTraitsSubject.asObservable();
  selectedTraits$: Observable<Trait[]> = this.selectedTraitsSubject.asObservable();

  constructor(private ariaApiService: AriaApiService) {
    this.allTraits$ = this.ariaApiService.getAllTraits().pipe(
      map((traits: Trait[]) => {
        this.displayedTraitsSubject.next(traits);
        this.selectedTraitsSubject.next([this.EMPTY_TRAIT]);
        return traits;
      }),
    );
    this.allTraits$.subscribe();
  }
  ngOnDestroy(): void {
    this.displayedTraitsSubject.complete();
    this.selectedTraitsSubject.complete();
  }

  updateSelectedTraits(trait: Trait): void {
    const currentSelected = this.selectedTraitsSubject.getValue();
    const currentDisplayed = this.displayedTraitsSubject.getValue();
    const isSelected = currentSelected.some((t) => t.id === trait.id);
    let updatedSelected: Trait[];
    let updatedDisplayed: Trait[];
    if (isSelected) {
      updatedSelected = currentSelected.filter((t) => t.id !== trait.id);
      updatedDisplayed = [...currentDisplayed, trait];
      if (updatedSelected.length === 0) updatedSelected.push(this.EMPTY_TRAIT);
    } else {
      updatedSelected = [...currentSelected, trait];
      updatedDisplayed = currentDisplayed.filter((t) => t.id !== trait.id);
      if (updatedSelected.length > 0)
        updatedSelected = updatedSelected.filter((t) => t.id !== this.EMPTY_TRAIT.id);
    }
    this.selectedTraitsSubject.next(updatedSelected);
    this.displayedTraitsSubject.next(updatedDisplayed);
  }

  onTraitClicked(trait: Trait): void {
    if (trait) this.updateSelectedTraits(trait);
  }
}
