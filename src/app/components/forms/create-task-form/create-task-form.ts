import { Component } from '@angular/core';
import { ButtonComponent } from "../../atoms/button-component/button-component";
import { InputComponent } from "../../atoms/input-component/input-component";

@Component({
  selector: 'app-create-task-form',
  imports: [ButtonComponent, InputComponent],
  templateUrl: './create-task-form.html',
  styleUrl: './create-task-form.css'
})
export class CreateTaskForm {

}
