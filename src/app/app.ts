import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('todo');

  constructor(){
    
    
console.log(" process.env['NG_APP_FIREBASE_API_KEY']",  process.env['NG_APP_FIREBASE_API_KEY'])
  }
}
