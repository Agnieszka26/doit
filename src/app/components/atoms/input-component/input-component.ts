import { Component, HostBinding, Input, signal } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { forwardRef } from '@angular/core';
type InputType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url'
  | 'search'
  | 'date'
  | 'datetime-local'
  | 'month'
  | 'time'
  | 'week'
  | 'color'
  | 'file'
  | 'checkbox'
  | 'radio'
  | 'range'
  | 'hidden'
  | 'submit'
  | 'reset'
  | 'button';

@Component({
  standalone: true,
  selector: 'app-input-component',
  imports: [ReactiveFormsModule],
  templateUrl: './input-component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  styleUrl: './input-component.css',
})
export class InputComponent implements ControlValueAccessor {
  @Input() placeholder = '';
  @Input() icon = '';
  private _invalid = signal(false);
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() type: InputType = 'text';

  @HostBinding('class.light') get isLight() {
    return this.theme === 'light';
  }

  @HostBinding('class.dark') get isDark() {
    return this.theme === 'dark';
  }

  @Input()
  set invalid(value: boolean) {
    this._invalid.set(value);
  }
  get invalid() {
    return this._invalid();
  }
  @Input() errors: ValidationErrors | null = null;

  value = '';

  private onChange = (v: string) => {
    console.log('onChange', v);
  };
  private onTouched = () => {
    console.log('onTouched');
  };

  writeValue(v: string): void {
    this.value = v;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  onInput(v: string) {
    console.log('onInput', v);
    this.value = v;
    this.onChange(v);
  }

  get firstErrorMessage(): string | null {
    const errors = this.errors;
    if (!errors) return null;
    if (errors['required']) {
      return 'This field is required';
    }
    if (errors['email']) {
      return 'Invalid email format';
    }
    if (errors['minlength']) {
      return `Minimum length is ${errors['minlength'].requiredLength}`;
    }
    return 'Invalid value';
  }
}
