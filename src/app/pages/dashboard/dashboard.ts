import { Component, computed, inject } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { TaskItem } from '../../components/task-item/task-item';
import { AuthService } from '../../service/auth';
import { toSignal } from '@angular/core/rxjs-interop';
import { TaskService } from '../../service/task';
import { from } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [Navbar, TaskItem, CommonModule],
  templateUrl: './dashboard.html',
   standalone: true,
})
export class Dashboard {
  private authService = inject(AuthService);
  private taskService = inject(TaskService);
  tasks = toSignal(from(this.taskService.getTasks()));
  completedTasks = computed(() => this.tasks()?.completed ?? []);
  incompleteTasks = computed(() => this.tasks()?.incomplete ?? []);
  readonly user = toSignal(this.authService.userWithProfile$);
  readonly name = computed(() => this.user()?.profile?.['name'] ?? '');
  readonly email = computed(() => this.user()?.profile?.['email'] ?? 'email');
}
