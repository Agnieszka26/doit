import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { NotFound } from './pages/not-found/not-found';
import { Singin } from './pages/singin/singin';
import { VerificationPage } from './pages/verification-page/verification-page';
import { Dashboard } from './pages/dashboard/dashboard';
import { TaskPage } from './pages/task-page/task-page';
import { TaskDetailsPage } from './pages/task-details-page/task-details-page';
import { SettingPage } from './pages/setting-page/setting-page';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'singin', component: Singin },
  { path: 'verification', component: VerificationPage },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
  { path: 'task', component: TaskPage,  canActivate: [authGuard]  },
  {path: 'task/:id', component: TaskDetailsPage,  canActivate: [authGuard] },
  { path: 'calendar', component: TaskPage,  canActivate: [authGuard]  },
  { path: 'settings', component: SettingPage,  canActivate: [authGuard] },
  { path: '**', component: NotFound },
];
