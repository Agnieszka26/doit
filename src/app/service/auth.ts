import { inject, Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, User, user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  private router = inject(Router);

  user$: Observable<User | null> = user(this.auth);

  async login(email: string, password: string) {
    const cred = await signInWithEmailAndPassword(this.auth, email, password);
    return cred.user;
  }

  async logout() {
    await signOut(this.auth);
    this.router.navigate(['/login']);
  }
}
