import { Component, inject} from '@angular/core';
import { ButtonComponent } from '../../atoms/button-component/button-component';
import { InputComponent } from '../../atoms/input-component/input-component';
import { texts } from '../../../constants/texts';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-create-task-form',
  imports: [ButtonComponent, InputComponent, ReactiveFormsModule],
  templateUrl: './create-task-form.html',
  styleUrl: './create-task-form.css',
})
export class CreateTaskForm {
private _bottomSheetRef = inject(MatBottomSheetRef<CreateTaskForm>);
  readonly TEXTS = texts.TASK;
  private fb = inject(FormBuilder);
  form: FormGroup = this.fb.group({
    taskName: [''],
    taskDescription: [''],
    taskDate: [''],
    taskTime: [''],
  });

  onSubmit() {
    console.log('Form submitted:', this.form.value);
    this._bottomSheetRef.dismiss('clear');
  }
  onCancel() {
    console.log('onCancel');
    this.form.reset();
    this._bottomSheetRef.dismiss('clear');
  }
}
