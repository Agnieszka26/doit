import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User, user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { from, Observable, shareReplay } from 'rxjs';
import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { of, switchMap, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  private router = inject(Router);
  private firestore = inject(Firestore);
  user$: Observable<User | null> = user(this.auth);

  async login(email: string, password: string) {
    const cred = await signInWithEmailAndPassword(this.auth, email, password);
    return cred.user;
  }

  //   async getUserProfile(uid: string) {
  //     console.log('Fetching user profile for UID:', uid);
    
  //   const ref = doc(this.firestore, `users/${uid}`);
  //   console.log('Document reference:', ref);
  //   const snapshot = await getDoc(ref);
  //   return snapshot.exists() ? snapshot.data() : null;
  // }
    userWithProfile$ = this.user$.pipe(
    switchMap(user => {
      if (!user) {
        return of(null); // jeśli brak użytkownika, zwróć null
      }
      const ref = doc(this.firestore, `users/${user.uid}`);
      return from(getDoc(ref)).pipe(
        map(snapshot => ({
          user,
          profile: snapshot.exists() ? snapshot.data() : null
        }))
      );
    }),
    // dzięki shareReplay każdy subskrybent dostaje ostatnią wartość bez ponownego fetchowania
    shareReplay({ bufferSize: 1, refCount: true })
  );

  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }

  async logout() {
    await signOut(this.auth);
    this.router.navigate(['/login']);
  }

    async register(name: string, email: string, password: string) {
    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
    const user = userCredential.user;
    await setDoc(doc(this.firestore, 'users', user.uid), {
      name,
      email,
      id: user.uid,
      createdAt: new Date(),
    });
    return user;
  }
}
