import { Component, signal } from '@angular/core';
import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-root',
//   imports: [],
//   templateUrl: '../app.html',
//   styleUrl: '../app.css',
// })
export class App {
  constructor() {
    const observable$ = new Observable<string>((subscriber) => {
      subscriber.next('Ardahan');
      setTimeout(() => subscriber.next('Duru'), 1000);
      setTimeout(() => subscriber.next('Gülhizar'), 2000);
    });

    const subscription = observable$.subscribe((value) => console.log(value));

    //? Her ikisi için de aynı data geliyorsa bu bir hot observabledır.
    setTimeout(() => {
      subscription.unsubscribe();
    }, 1500);
  }
}
