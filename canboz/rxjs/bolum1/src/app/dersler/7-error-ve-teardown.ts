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

      setTimeout(() => {
        subscriber.next('Gülhizar');
      }, 1000);

      setTimeout(() => {
        subscriber.next('Duru');
        subscriber.error(new Error('Hata Alındı'));
      }, 2000);

      //? Complete, unsubscribe veya error sonrası teardown fonksiyonu çalışır ve kaynaklar temizlenir.
      return () => console.log('Teardown');
    });

    console.log('Önce');
    observable$.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Tamamlandı'),
      error: (err) => console.log(err.message),
    });
    console.log('Sonra');
  }
}
