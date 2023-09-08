import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BesoinsClientComponent } from './besoins-client.component';

describe('BesoinsClientComponent', () => {
  let component: BesoinsClientComponent;
  let fixture: ComponentFixture<BesoinsClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BesoinsClientComponent]
    });
    fixture = TestBed.createComponent(BesoinsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
