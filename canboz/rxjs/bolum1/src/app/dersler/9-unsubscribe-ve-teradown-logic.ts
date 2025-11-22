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
    const observable$ = new Observable<number>((subscriber) => {
      let sayac = 1;

      const intervalId = setInterval(() => {
        if (sayac === 10) {
          subscriber.next(sayac++);
          subscriber.complete();
        }
        subscriber.next(sayac++);
      }, 1000);

      //? Eğer teardown olmasaydı complete,error ya da unsubscribe dan sonra bile observable sayacı çalıştırmaya devam ederdi.
      return () => clearInterval(intervalId);
    });

    const subscription = observable$.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Tamamlandı'),
    });
    2;
    const subscription2 = observable$.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Tamamlandı'),
    });

    setTimeout(() => {
      subscription.unsubscribe();
    }, 5000);
  }
}
