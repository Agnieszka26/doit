import { Component } from '@angular/core';
import { LoginForm } from '../../components/forms/login-form/login-form';
import { texts } from '../../constants/texts';
import { LinkComponent } from '../../components/atoms/link-component/link-component';
import { Drawer } from '../../components/drawer/drawer';

@Component({
  selector: 'app-login',
  imports: [LoginForm, LinkComponent, Drawer],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true,
})
export class Login {
  readonly TEXTS = texts.LOGIN_SIGNIN;
  isOpen = false;
  drawerType: 'apple' | 'google' | null = null;

  openSheet(type: 'apple' | 'google') {
    this.drawerType = type;
    console.log('openSheet()');
    this.isOpen = true;
  }

  closeSheet() {
    this.isOpen = false;
  }
}
