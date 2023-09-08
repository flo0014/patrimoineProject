import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatCivilComponent } from './etat-civil.component';

describe('EtatCivilComponent', () => {
  let component: EtatCivilComponent;
  let fixture: ComponentFixture<EtatCivilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtatCivilComponent]
    });
    fixture = TestBed.createComponent(EtatCivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
