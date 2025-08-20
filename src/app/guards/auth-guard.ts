import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth'
import { map } from 'rxjs';
export const authGuard: CanActivateFn = (route, state) => {
const authService = inject(AuthService);
  const router = inject(Router);

  return authService.user$.pipe(
    map(user => {
      if (user) {
        return true; // ✅ zalogowany -> wpuszczamy
      } else {
        router.navigate(['/login']); // 🚫 niezalogowany -> redirect
        return false;
      }
    })
  );
};
