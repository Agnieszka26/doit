import { Component } from '@angular/core';
import { texts } from '../../constants/texts';
import { LinkComponent } from '../../components/atoms/link-component/link-component';
import { SigninForm } from '../../components/forms/signin-form/signin-form';

@Component({
  selector: 'app-singin',
  imports: [SigninForm, LinkComponent],
  templateUrl: './singin.html',
  styleUrls: ['../login/login.css'],
  standalone: true,
})
export class Singin {
 readonly TEXTS = texts.LOGIN_SIGNIN;
}
