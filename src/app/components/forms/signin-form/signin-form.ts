import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { InputComponent } from '../../atoms/input-component/input-component';
import { ButtonComponent } from '../../atoms/button-component/button-component';
import { LinkComponent } from '../../atoms/link-component/link-component';
import { texts } from '../../../constants/texts';

export function matchValidator(
  matchTo: string, 
  reverse?: boolean
): ValidatorFn {
  return (control: AbstractControl): 
  ValidationErrors | null => {
    if (control.parent && reverse) {
      const c = (control.parent?.controls as any)[matchTo] as AbstractControl;
      if (c) {
        c.updateValueAndValidity();
      }
      return null;
    }
    return !!control.parent &&
      !!control.parent.value &&
      control.value === 
      (control.parent?.controls as any)[matchTo].value
      ? null
      : { matching: true };
  };
}

@Component({
  selector: 'app-signin-form',
  imports: [
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
  ],
  templateUrl: './signin-form.html',
  standalone: true,
  styleUrl:'../login-form/login-form.css'})

export class SigninForm {
 readonly TEXTS = texts.LOGIN_SIGNIN;
  private fb = inject(FormBuilder);
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6),
       matchValidator('confirmPassword', true)
    ]],
    confirmPassword: ['', [Validators.required,  matchValidator('password'), Validators.minLength(6)]],  
  })
 constructor() {
  this.form.valueChanges.subscribe((value) => {
    console.log('Form changes:', value);
  });
 }

 onSubmit() {
  if (this.form.valid){
    console.log('Form submitted:', this.form.value);
    // tutaj można dodać logikę rejestracji, np. wysłanie danych do serwera 
  }else{
    console.error('Form is invalid');
    this.form.markAllAsTouched();   
  }
 }
}
