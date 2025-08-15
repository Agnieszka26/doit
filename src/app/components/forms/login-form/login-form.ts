import { Component, inject } from '@angular/core';
import { texts } from '../../../constants/texts';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../../firebase.config';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../../atoms/input-component/input-component';
import { ButtonComponent } from '../../atoms/button-component/button-component';
import { LinkComponent } from '../../atoms/link-component/link-component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    LinkComponent,
  ],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  readonly TEXTS = texts.LOGIN_SIGNIN;
  private router = inject(Router);
  private fb = inject(FormBuilder);
  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor() {
    //reagowanie na zmiany w formularzu
    this.form.valueChanges.subscribe((value) => {
      console.log('Form changes:', value);
    });
  }


  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
      const email = this.form.value.email
      const password = this.form.value.password
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        this.router.navigate(['dashboard']);

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("errorCode:", errorCode, "errorMessage", errorMessage)
  });

    } else {
      console.log('Form is invalid');
      this.form.markAllAsTouched();
    }
  }
}
