import { Component, signal } from '@angular/core';
import { filter, forkJoin, from, map, of, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
   selector: 'app-root',
   imports: [],
   templateUrl: '../app.html',
   styleUrl: '../app.css',
})
export class App {
   constructor() {
      //? tap operatörü, Observable akışındaki değerleri değiştirmeden yan etkiler (örneğin loglama) oluşturmak için kullanılır.

      const source = of(1, 2, 3, 4, 5);

      const example = source.pipe(
         tap((val) => console.log(`Before: ${val}`)),
         map((val) => val + 10),
         filter((val) => val > 13), // şartı sağlamayanlar soranki aşamaya geçemez
         tap((val) => console.log(`After: ${val}`))
      );

      const subscribe = example.subscribe();
   }
}
