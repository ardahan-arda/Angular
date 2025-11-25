import { Component, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
   selector: 'app-root',
   imports: [],
   templateUrl: '../app.html',
   styleUrl: '../app.css',
})
export class App {
   constructor() {
      const sub = new Subject();

      sub.next(1);

      sub.subscribe((x) => {
         console.log('Sub A:', x);
      });

      sub.next(2);

      sub.subscribe((x) => {
         console.log('Sub B:', x);
      });

      sub.next(3);
   }
}
