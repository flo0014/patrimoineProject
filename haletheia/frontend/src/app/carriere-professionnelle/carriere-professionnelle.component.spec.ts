import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarriereProfessionnelleComponent } from './carriere-professionnelle.component';

describe('CarriereProfessionnelleComponent', () => {
  let component: CarriereProfessionnelleComponent;
  let fixture: ComponentFixture<CarriereProfessionnelleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarriereProfessionnelleComponent]
    });
    fixture = TestBed.createComponent(CarriereProfessionnelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
