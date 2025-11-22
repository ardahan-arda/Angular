import { Component } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: '../app.html',
  styleUrl: '../app.css',
})
export class App {
  constructor() {
    //? forkJoin ile birden fazla observable'ın tamamlanmasını bekliyoruz.
    //? Ancak obs2$ hata (error) ile sonuçlandığı için forkJoin hiçbir değer yaymaz ve hata fırlatır.
    //? forkJoin'da herhangi bir observable hata verirse, diğerlerinden değer gelse bile sonuç alınamaz.
    const obs1$ = new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next('Obs1');
        subscriber.complete();
      }, 3000);
    });

    const obs2$ = new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next('Obs2');
        subscriber.complete();
        // subscriber.error('Failure');
      }, 5000);
    });

    forkJoin([obs1$, obs2$]).subscribe({
      next: (value) => console.log(value),
    });
  }
}
