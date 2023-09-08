import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnaissancesFinancieresComponent } from './connaissances-financieres.component';

describe('ConnaissancesFinancieresComponent', () => {
  let component: ConnaissancesFinancieresComponent;
  let fixture: ComponentFixture<ConnaissancesFinancieresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnaissancesFinancieresComponent]
    });
    fixture = TestBed.createComponent(ConnaissancesFinancieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
