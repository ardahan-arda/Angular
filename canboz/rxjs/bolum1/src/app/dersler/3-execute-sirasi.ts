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
    });

    console.log('Önce');
    observable$.subscribe();
    console.log('Sonra');
  }
}
