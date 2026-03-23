import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordCheckingComponent } from './password-checking.component';

describe('PasswordCheckingComponent', () => {
  let component: PasswordCheckingComponent;
  let fixture: ComponentFixture<PasswordCheckingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordCheckingComponent]
    });
    fixture = TestBed.createComponent(PasswordCheckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
