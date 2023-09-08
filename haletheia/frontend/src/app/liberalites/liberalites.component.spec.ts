import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiberalitesComponent } from './liberalites.component';

describe('LiberalitesComponent', () => {
  let component: LiberalitesComponent;
  let fixture: ComponentFixture<LiberalitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiberalitesComponent]
    });
    fixture = TestBed.createComponent(LiberalitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
