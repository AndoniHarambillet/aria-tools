import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitPicker } from './trait-picker';

describe('TraitPicker', () => {
  let component: TraitPicker;
  let fixture: ComponentFixture<TraitPicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraitPicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraitPicker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
