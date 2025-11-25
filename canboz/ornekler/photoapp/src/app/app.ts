import { Component, signal } from '@angular/core';
import { Displayphoto } from './displayphoto/displayphoto';

@Component({
   selector: 'app-root',
   imports: [Displayphoto],
   templateUrl: './app.html',
   styleUrl: './app.css',
})
export class App {}
