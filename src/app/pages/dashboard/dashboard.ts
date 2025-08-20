import { Component, computed, inject } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { TaskItem } from "../../components/task-item/task-item";
import { AuthService } from '../../service/auth';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-dashboard',
  imports: [Navbar, TaskItem],
  templateUrl: './dashboard.html',
})

export class Dashboard {
  private authService = inject(AuthService);
  readonly user = toSignal(this.authService.userWithProfile$);
  readonly name = computed(() => this.user()?.profile?.['name'] ?? '');
  readonly email = computed(() => this.user()?.profile?.['email'] ?? 'email')
}
