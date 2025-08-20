import { Component, inject } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { TaskItem } from "../../components/task-item/task-item";
import { CreateTaskForm } from "../../components/forms/create-task-form/create-task-form";
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { getFirestore, collection, addDoc, getDocs} from 'firebase/firestore';

import {MatButtonModule} from '@angular/material/button';
import { app } from '../../../firebase.config';

const db = getFirestore(app);
@Component({
  selector: 'app-task-page',
  imports: [Navbar, TaskItem, MatButtonModule, MatBottomSheetModule],
  templateUrl: './task-page.html',
  //styleUrl: '../dashboard.css'
})
export class TaskPage {
    private _bottomSheet = inject(MatBottomSheet);
 constructor() {

   async function getTasks() {
     try {
      const docsRef = await getDocs(collection(db, "tasks"))
        docsRef.forEach(doc => {
          console.log(doc.id, " => ", doc.data());
        });
      // console.log("docsRef", docsRef)
     } catch (error) {
      console.error(error)
     }

  }
 getTasks()
}

  openBottomSheet(): void {
    this._bottomSheet.open(CreateTaskForm);
  }
  closeBottomSheet(): void{
    console.log("closeBottomSheet")
    if (this._bottomSheet) {
    this._bottomSheet.dismiss();
  }
  }
}
