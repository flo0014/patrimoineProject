import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarantiesEtRevenusComponent } from './garanties-et-revenus.component';

describe('GarantiesEtRevenusComponent', () => {
  let component: GarantiesEtRevenusComponent;
  let fixture: ComponentFixture<GarantiesEtRevenusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GarantiesEtRevenusComponent]
    });
    fixture = TestBed.createComponent(GarantiesEtRevenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
