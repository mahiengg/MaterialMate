import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(private fb: FormBuilder) {}

  signForm = this.fb.group({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    passWord: new FormControl('', Validators.required),
  });

  registered() {
    console.log('ffffff');
  }
}
