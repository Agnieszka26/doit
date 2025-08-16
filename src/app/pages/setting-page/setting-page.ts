import { Component, inject } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { texts } from '../../constants/texts';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting-page',
  imports: [Navbar],
  templateUrl: './setting-page.html',
  styleUrl: './setting-page.css',
})
export class SettingPage {
  readonly TEXTS = texts.SETTINGS;
  private router = inject(Router);
  logout() {
    signOut(auth)
      .then(() => {
        console.log('Logout successful.');
        this.router.navigate(["/"])
        
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
