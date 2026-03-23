import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-checking',
  templateUrl: './password-checking.component.html',
  styleUrls: ['./password-checking.component.css'],
})
export class PasswordCheckingComponent implements OnInit {
  public passwordMatchingForm: any;

  constructor(
    private fb:FormBuilder
  )
  {

  }
  ngOnInit() {
    this.initalForm();
console.log(
  'confirmpassword:',
  this.passwordMatchingForm.get('confirmPassword')
);
  }

  initalForm(){
    this.passwordMatchingForm = this.fb.group({
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-=\\[\\]{};:\'",.<>/?]).{8,32}$'
          ),
        ],
      ],
      confirmPassword: ['', Validators.required],
    },

    {
      validators:[this.passwordMatchingValidator]
    }
);
  }

  passwordMatchingValidator(group:FormGroup)
  {
  const password = group.get('password')?.value
  const confirmPassword = group.get('confirmPassword');

  if (password !== confirmPassword?.value)
  {
    confirmPassword?.setErrors({ passwordMismatch: true });
  }
  else{
    confirmPassword?.setErrors(null)
  }
    return null;
  }


}
