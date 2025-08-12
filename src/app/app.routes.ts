import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { NotFound } from './pages/not-found/not-found';
import { Singin } from './pages/singin/singin';
import { VerificationPage } from './pages/verification-page/verification-page';
import { Dashboard } from './pages/dashboard/dashboard';
import { TaskPage } from './pages/task-page/task-page';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'singin', component: Singin },
  { path: 'verification', component: VerificationPage },
  { path: 'dashboard', component: Dashboard },
  { path: 'task', component: TaskPage },
  { path: 'calendar', component: TaskPage },
  { path: 'settings', component: TaskPage },
  { path: '**', component: NotFound },
];
