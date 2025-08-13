import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-button-component',
  imports: [],
  templateUrl: './button-component.html',
  styleUrl: './button-component.css',
})
export class ButtonComponent {
  @Input() label = '';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled = false;
  @Input() theme: 'outlined' | 'filled' = 'filled';

  @HostBinding('class.outlined') get isOutlined() {
    return this.theme === 'outlined';
  }

  @HostBinding('class.filled') get isFilled() {
    return this.theme === 'filled';
  }
}
