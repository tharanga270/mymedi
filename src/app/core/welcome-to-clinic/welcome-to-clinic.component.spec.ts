import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeToClinicComponent } from './welcome-to-clinic.component';

describe('WelcomeToClinicComponent', () => {
  let component: WelcomeToClinicComponent;
  let fixture: ComponentFixture<WelcomeToClinicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeToClinicComponent]
    });
    fixture = TestBed.createComponent(WelcomeToClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
