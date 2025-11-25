import { Component, signal } from '@angular/core';
import { Equality } from './equality/equality';

@Component({
   selector: 'app-root',
   imports: [Equality],
   templateUrl: './app.html',
   styleUrl: './app.css',
})
export class App {
   protected readonly title = signal('mathplay');
}
