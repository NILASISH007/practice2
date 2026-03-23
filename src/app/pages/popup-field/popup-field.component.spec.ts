import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupFieldComponent } from './popup-field.component';

describe('PopupFieldComponent', () => {
  let component: PopupFieldComponent;
  let fixture: ComponentFixture<PopupFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupFieldComponent]
    });
    fixture = TestBed.createComponent(PopupFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
