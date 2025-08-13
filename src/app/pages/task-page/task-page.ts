import { Component, inject } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { TaskItem } from "../../components/task-item/task-item";
import { CreateTaskForm } from "../../components/forms/create-task-form/create-task-form";
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';

import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-task-page',
  imports: [Navbar, TaskItem, MatButtonModule, MatBottomSheetModule],
  templateUrl: './task-page.html',
  //styleUrl: '../dashboard.css'
})
export class TaskPage {
    private _bottomSheet = inject(MatBottomSheet);

  openBottomSheet(): void {
    this._bottomSheet.open(CreateTaskForm);
  }
  closeBottomSheet(): void{
    console.log("closeBottomSheet")
    if (this._bottomSheet) {
    this._bottomSheet.dismiss();
  }
  }
// isOpen = false;
//   openSheet() {
//     this.isOpen = true;
//   }

//   closeSheet = () => {
//     console.log("closeSheet()")
//     console.log("this.isOpen", this.isOpen)
//     this.isOpen = false;
//     console.log("this.isOpen", this.isOpen)
//   }
}
