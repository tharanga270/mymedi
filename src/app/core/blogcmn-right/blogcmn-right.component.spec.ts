import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogcmnRightComponent } from './blogcmn-right.component';

describe('BlogcmnRightComponent', () => {
  let component: BlogcmnRightComponent;
  let fixture: ComponentFixture<BlogcmnRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogcmnRightComponent]
    });
    fixture = TestBed.createComponent(BlogcmnRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
