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

      //? error() ya da complete() olduktan sonra observable da teardown varsa girer ve sonrasındaki olaylar çalışmaz.
      setTimeout(() => {
        subscriber.next('Duru');
        subscriber.error(new Error('Hata Alındı'));
      }, 2000);

      setTimeout(() => {
        subscriber.next('Gülhizar');
        subscriber.complete();
      }, 4000);

      return () => console.log('Teardown');
    });

    observable$.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Tamamlandı'),
      error: (err) => console.log(err.message),
    });
  }
}
