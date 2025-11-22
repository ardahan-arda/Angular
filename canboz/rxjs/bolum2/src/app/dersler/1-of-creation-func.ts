import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
   selector: 'app-root',
   imports: [],
   templateUrl: '../app.html',
   styleUrl: '../app.css',
})
export class App {
   constructor() {
      //? Yeni bir observable oluşturur. İçerisine aldığı değerler next() ile atanan değerlere karşılık gelir.
      //? Elemanlar herhangi bir tipte olabilir (string, number, boolean, obje vs.)
      of('Ardahan', 'Gülhizar', 'Duru', 20, true).subscribe({
         next: (value) => console.log(value),
         complete: () => console.log('Completed'),
      });
   }
}
