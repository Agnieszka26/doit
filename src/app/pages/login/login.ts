import { Component } from '@angular/core';
import { LoginForm } from '../../components/forms/login-form/login-form';
import { texts } from '../../constants/texts';
import { LinkComponent } from "../../components/atoms/link-component/link-component";

@Component({
  selector: 'app-login',
  imports: [LoginForm, LinkComponent],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
readonly TEXTS = texts.LOGIN_SIGNIN;
}
