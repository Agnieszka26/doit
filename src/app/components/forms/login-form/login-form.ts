import { Component, inject } from '@angular/core';
import { texts } from '../../../constants/texts';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../../atoms/input-component/input-component';
import { ButtonComponent } from '../../atoms/button-component/button-component';
import { LinkComponent } from '../../atoms/link-component/link-component';
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
      // tutaj można dodać logikę logowania, np. wysłanie danych do serwera
    } else {
      console.log('Form is invalid');
      this.form.markAllAsTouched();
      // tutaj można dodać logikę obsługi błędów, np. wyświetlenie komunikatu o błędzie
    }
  }
}
