import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CustomSlider } from './custom-slider/custom-slider';

@Component({
  selector: 'app-root',
   imports: [CustomSlider],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo');
}
