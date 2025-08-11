import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-component',
  imports: [],
  templateUrl: './link-component.html',
  styleUrl: './link-component.css'
})
export class LinkComponent {
@Input() label = '';
@Input() href = '';
}
