import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementBannerComponent } from './element-banner.component';

describe('ElementBannerComponent', () => {
  let component: ElementBannerComponent;
  let fixture: ComponentFixture<ElementBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElementBannerComponent]
    });
    fixture = TestBed.createComponent(ElementBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
