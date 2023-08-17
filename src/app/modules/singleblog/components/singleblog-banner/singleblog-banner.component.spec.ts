import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleblogBannerComponent } from './singleblog-banner.component';

describe('SingleblogBannerComponent', () => {
  let component: SingleblogBannerComponent;
  let fixture: ComponentFixture<SingleblogBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleblogBannerComponent]
    });
    fixture = TestBed.createComponent(SingleblogBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
