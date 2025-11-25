import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Cardform } from './cardform/cardform';

@Component({
   selector: 'app-root',
   imports: [ReactiveFormsModule, Cardform],
   templateUrl: './app.html',
   styleUrl: './app.css',
})
export class App {
   protected readonly title = signal('reactive-form');
}
