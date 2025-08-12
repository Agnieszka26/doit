import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { TaskItem } from "../../components/task-item/task-item";
import { Drawer } from "../../components/drawer/drawer";

@Component({
  selector: 'app-task-page',
  imports: [Navbar, TaskItem, Drawer],
  templateUrl: './task-page.html',
  //styleUrl: '../dashboard.css'
})
export class TaskPage {
isOpen = false;
  openSheet() {
    this.isOpen = true;
  }

  closeSheet() {
    this.isOpen = false;
  }
}
