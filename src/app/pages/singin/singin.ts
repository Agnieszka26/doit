import { Component } from '@angular/core';
import { texts } from '../../constants/texts';
import { LinkComponent } from '../../components/atoms/link-component/link-component';
import { SigninForm } from '../../components/forms/signin-form/signin-form';
import { Drawer } from '../../components/drawer/drawer';

@Component({
  selector: 'app-singin',
  imports: [SigninForm, LinkComponent, Drawer],
  templateUrl: './singin.html',
  styleUrls: ['../login/login.css'],
  standalone: true,
})
export class Singin {
 readonly TEXTS = texts.LOGIN_SIGNIN;
 drawerType: 'apple' | 'google' | null = null;
isOpen = false;
  openSheet(type: 'apple' | 'google') {
    this.drawerType = type;
    this.isOpen = true;
  }

  closeSheet() {
    this.isOpen = false;
  }
}
