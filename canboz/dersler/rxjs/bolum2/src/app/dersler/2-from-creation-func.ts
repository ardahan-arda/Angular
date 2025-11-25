import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
   selector: 'app-root',
   imports: [],
   templateUrl: '../app.html',
   styleUrl: '../app.css',
})
export class App {
   constructor() {
      //? Yeni bir observable oluşturur. İçerisine dizi şeklinde aldığı değerler next() ile atanan değerlere karşılık gelir.
      //? Dizi içindeki elemanlar herhangi bir tipte olabilir (string, number, boolean, obje vs.)
      const array = ['Ardahan', 'Gülhizar', 'Duru', 20, true];
      const result$ = from(array);
      result$.subscribe((x) => console.log(x));

      //? Promise döndüren bir değeri Observable'a çevirir. Promise resolve olduğunda, değeri next() ile yayar ve ardından complete olur.
      const somePromise = new Promise((resolve, reject) => {
         const d = true;
         if (d) {
            resolve('Kabul Edildi');
         } else {
            reject('İptal Edildi');
         }
      });

      const observableFromPromise$ = from(somePromise);
      observableFromPromise$.subscribe({
         next: (value) => console.log(value),
         error: (err) => console.log('Error', err),
         complete: () => console.log('Complete'),
      });
   }
}
