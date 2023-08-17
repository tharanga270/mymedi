import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityHealthComponent } from './quality-health.component';

describe('QualityHealthComponent', () => {
  let component: QualityHealthComponent;
  let fixture: ComponentFixture<QualityHealthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QualityHealthComponent]
    });
    fixture = TestBed.createComponent(QualityHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
