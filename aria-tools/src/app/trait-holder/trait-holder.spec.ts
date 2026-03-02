import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitHolder } from './trait-holder';

describe('TraitHolder', () => {
  let component: TraitHolder;
  let fixture: ComponentFixture<TraitHolder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraitHolder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraitHolder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
