import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitParent } from './trait-parent';

describe('TraitParent', () => {
  let component: TraitParent;
  let fixture: ComponentFixture<TraitParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraitParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraitParent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
