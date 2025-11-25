import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: '../app.html',
  styleUrl: '../app.css',
})
export class App {
  constructor() {
    const observable$ = new Observable<string>((subscriber) => {
      subscriber.next('Ardahan');
      setTimeout(() => subscriber.next('Duru'), 1000);
      setTimeout(() => subscriber.next('Gülhizar'), 2000);
    });

    observable$.subscribe((value) => console.log('Sub1:', value));

    //? Her subscribe işlemi, observable'ı baştan çalıştırır ve değerler tekrar sırasıyla gelir.
    //? Her subscribe, kendi başına observable'ın ürettiği değerlere ulaşır.
    setTimeout(() => {
      observable$.subscribe((value) => console.log('Sub2:', value));
    }, 3000);
  }
}
