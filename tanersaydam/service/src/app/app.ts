import { Component, signal } from '@angular/core';
import { AComponent } from './components/a/a';

@Component({
  selector: 'app-root',
  imports: [AComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('service');
}
