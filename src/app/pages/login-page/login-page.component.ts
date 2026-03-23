import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  public loginForm: any;

  constructor(
    private fb: FormBuilder,
    private router : Router
  ) {}

  ngOnInit() {
    this.iniLoginForm();
  }

  iniLoginForm() {
    this.loginForm = this.fb.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    });
  }
  submit()
  {
    console.log("the submited data", this.loginForm.value);
    let data = {
      name: this.loginForm.value.userName,
      password: this.loginForm.value.password,
    };
    console.log('the  data', data);
    localStorage.setItem("Login data",JSON.stringify(data))
    this.router.navigate(['/list']);
  }
}
