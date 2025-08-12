import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItem {
@Input({ required: true }) taskName!: string;
@Input({ required: true }) taskTime!: string;
@Input({ required: true }) taskId!: string;
@Input() isComplete!: boolean;
}
