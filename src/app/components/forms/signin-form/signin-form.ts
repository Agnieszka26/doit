import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../../atoms/input-component/input-component';
import { ButtonComponent } from '../../atoms/button-component/button-component';
import { texts } from '../../../constants/texts';
import { Drawer } from '../../drawer/drawer';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../firebase.config';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

export function matchValidator(
  matchTo: string,
  reverse?: boolean,
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.parent && reverse) {
      const c = (control.parent?.controls as any)[matchTo] as AbstractControl;
      if (c) {
        c.updateValueAndValidity();
      }
      return null;
    }
    return !!control.parent &&
      !!control.parent.value &&
      control.value === (control.parent?.controls as any)[matchTo].value
      ? null
      : { matching: true };
  };
}
const db = getFirestore();
@Component({
  selector: 'app-signin-form',
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent, Drawer],
  templateUrl: './signin-form.html',
  standalone: true,
  styleUrl: '../login-form/login-form.css',
})
export class SigninForm {
  readonly TEXTS = texts.LOGIN_SIGNIN;
  private fb = inject(FormBuilder);
  drawerType: 'success' | null = null;
  isOpen = false;

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        matchValidator('confirmPassword', true),
      ],
    ],
    confirmPassword: [
      '',
      [
        Validators.required,
        matchValidator('password'),
        Validators.minLength(6),
      ],
    ],
  });


  onSubmit() {
    if (this.form.valid) {
      this.openSheet('success');
      const email = this.form.value.email;
      const password = this.form.value.password;
      const name = this.form.value.name;  
      if (email && password)
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            setDoc(doc(db, 'users', user.uid), {
              name: name || 'New User',
              email: user.email,
              id: user.uid,
              createdAt: new Date(),
            });
          })

          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(
              'errorCode:',
              errorCode,
              'errorMessage',
              errorMessage,
            );
          });
    } else {
      console.error('Form is invalid');
      this.form.markAllAsTouched();
    }
  }
  openSheet(type: 'success') {
    this.drawerType = type;
    this.isOpen = true;
  }

  closeSheet() {
    this.isOpen = false;
  }
}
