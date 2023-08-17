import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentBannerComponent } from './department-banner.component';

describe('DepartmentBannerComponent', () => {
  let component: DepartmentBannerComponent;
  let fixture: ComponentFixture<DepartmentBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentBannerComponent]
    });
    fixture = TestBed.createComponent(DepartmentBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
