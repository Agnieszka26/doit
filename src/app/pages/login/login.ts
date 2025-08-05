import { Component } from '@angular/core';
import { LoginForm } from '../../components/forms/login-form/login-form';
import { texts } from '../../constants/texts';

@Component({
  selector: 'app-login',
  imports: [LoginForm],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
readonly TEXTS = texts.LOGIN_SIGNIN;
}
