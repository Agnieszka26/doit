import { Component, inject } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { texts } from '../../constants/texts';
import { AuthService } from '../../service/auth';

@Component({
  selector: 'app-setting-page',
  imports: [Navbar],
  templateUrl: './setting-page.html',
  styleUrl: './setting-page.css',
})
export class SettingPage {
  readonly TEXTS = texts.SETTINGS;
  private authService = inject(AuthService);
  logout() {
    this.authService.logout();
  }
}
