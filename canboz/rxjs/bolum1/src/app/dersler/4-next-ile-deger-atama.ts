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
      console.log('Observable Çalıştı');
      subscriber.next('Ardahan');
    });

    console.log('Önce');
    observable$.subscribe((value) => console.log(value));
    console.log('Sonra');
  }
}
