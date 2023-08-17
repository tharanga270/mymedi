import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleblogLeftComponent } from './singleblog-left.component';

describe('SingleblogLeftComponent', () => {
  let component: SingleblogLeftComponent;
  let fixture: ComponentFixture<SingleblogLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleblogLeftComponent]
    });
    fixture = TestBed.createComponent(SingleblogLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
