import { Component } from '@angular/core';
import { texts } from '../../../constants/texts';
@Component({
  selector: 'app-login-form',
  imports: [],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm {
 readonly TEXTS = texts.LOGIN_SIGNIN;
}
