import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrimoineMobilierComponent } from './patrimoine-mobilier.component';

describe('PatrimoineMobilierComponent', () => {
  let component: PatrimoineMobilierComponent;
  let fixture: ComponentFixture<PatrimoineMobilierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatrimoineMobilierComponent]
    });
    fixture = TestBed.createComponent(PatrimoineMobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
