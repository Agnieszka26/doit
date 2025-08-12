import { Component, inject } from '@angular/core';
import { texts } from '../../constants/texts';
import { InputComponent } from '../../components/atoms/input-component/input-component';
import { ButtonComponent } from '../../components/atoms/button-component/button-component';
import { FormBuilder } from '@angular/forms';
import { Drawer } from '../../components/drawer/drawer';

@Component({
  selector: 'app-verification-page',
  imports: [InputComponent, ButtonComponent, Drawer],
  templateUrl: './verification-page.html',
  styleUrl: './verification-page.css',
})
export class VerificationPage {
  readonly TEXTS = texts.VERIFICATION;
  private fb = inject(FormBuilder);
  drawerType: 'success' | 'error' | null = null;
  isOpen = false;
  form = this.fb.group({
    emailCode: [''],
  });
    constructor() {
    this.form.valueChanges.subscribe((value) => {
      console.log('Form changes:', value);
    });
  }
  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
      this.openSheet('success');
      //TODO: zrobić prawdziwą weryfikację

    } else {
      console.error('Form is invalid');
      this.form.markAllAsTouched();
    }
  }
  openSheet(type: 'success' | 'error') {
    this.drawerType = type;
    this.isOpen = true;
  }

  closeSheet() {
    this.isOpen = false;
  }
}
