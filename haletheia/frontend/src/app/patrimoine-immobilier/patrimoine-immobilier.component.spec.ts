import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrimoineImmobilierComponent } from './patrimoine-immobilier.component';

describe('PatrimoineImmobilierComponent', () => {
  let component: PatrimoineImmobilierComponent;
  let fixture: ComponentFixture<PatrimoineImmobilierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatrimoineImmobilierComponent]
    });
    fixture = TestBed.createComponent(PatrimoineImmobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
