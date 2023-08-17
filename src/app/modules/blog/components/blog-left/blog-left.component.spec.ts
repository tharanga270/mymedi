import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLeftComponent } from './blog-left.component';

describe('BlogLeftComponent', () => {
  let component: BlogLeftComponent;
  let fixture: ComponentFixture<BlogLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogLeftComponent]
    });
    fixture = TestBed.createComponent(BlogLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
