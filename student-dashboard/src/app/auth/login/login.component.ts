import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { LoginModel } from 'src/app/shared/Models/registration.model';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private apiService : ApiService) {}

  loginForm = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    passWord: new FormControl('', Validators.required),
  });

  login() {
    console.log(':ffff');
    console.log(this.loginForm.value);

    // this.apiService.loginUser(this.loginForm.value as LoginModel).subscribe((res)=>{
    //   console.log(res);
    // })
    this.apiService.demoSignIn(this.loginForm.value as LoginModel);
  }
}
