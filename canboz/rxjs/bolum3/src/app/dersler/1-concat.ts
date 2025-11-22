import { Component } from '@angular/core';
import { concat, interval, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: '../app.html',
  styleUrl: '../app.css',
})
export class App {
  constructor() {
    concat(of(1, 2, 3), of(7, 8, 9), of(4, 5, 6)).subscribe({
      next: (value) => console.log(value),
    });

    //? interval() gibi tamamlanmayan (sonsuz) observable'lar kullanılırsa, concat sonraki observable'lara geçmez.
    concat(interval(1000), of(1, 2, 3), of(7, 8, 9), of(4, 5, 6)).subscribe({
      next: (value) => console.log(value),
    });
  }
}
