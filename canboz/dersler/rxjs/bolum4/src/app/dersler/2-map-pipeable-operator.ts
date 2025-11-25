import { Component, signal } from '@angular/core';
import { forkJoin, from, map } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
   selector: 'app-root',
   imports: [],
   templateUrl: '../app.html',
   styleUrl: '../app.css',
})
export class App {
   constructor() {
      //? map operatörü, bir Observable içindeki elemanları verilen fonksiyona göre dönüştürür ve yeni değerler yayar.

      //? Örnek 1

      // const source = from([1, 2, 3, 4, 5]);
      // const example = source.pipe(map((val) => val + 5));
      // example.subscribe((val) => console.log(val));

      //? Örnek 2
      const randomUser$ = ajax<any>('https://randomuser.me/api/').pipe(
         map((ajaxResponse) => ajaxResponse.response.results[0].name.first)
      );

      const randomFood$ = ajax<any>('/api/api/json/v1/1/random.php').pipe(
         map((ajaxResponse) => ajaxResponse.response.meals[0].strMeal)
      );

      forkJoin([randomUser$, randomFood$]).subscribe({
         next: ([randomName, randomFood]) =>
            console.log(`Kişi: ${randomName} Seçtiği Yemek: ${randomFood}`),
      });
   }
}
