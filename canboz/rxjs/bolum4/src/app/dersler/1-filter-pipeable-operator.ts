import { Component } from '@angular/core';
import { filter, from } from 'rxjs';

@Component({
   selector: 'app-root',
   imports: [],
   templateUrl: '../app.html',
   styleUrl: '../app.css',
})
export class App {
   constructor() {
      //? filter operatörü, bir Observable içindeki elemanları verilen koşula göre süzer ve sadece koşulu sağlayanları yayar.

      //? Örnek 1

      // let numbers: any = [];
      // const source = from([1, 2, 3, 4, 4, 5]);
      // const example = source.pipe(filter((num) => num % 2 === 1));
      // example.subscribe((val) => numbers.push(val));
      // console.log(numbers);

      //? Örnek 2

      const source = from([
         { name: 'Ardahan', age: 30 },
         { name: 'Gülhizar', age: 30 },
         { name: 'Duru', age: 2 },
      ]);

      const example = source.pipe(filter((person) => person.age > 3));

      example.subscribe((person) => console.log(person.name));
   }
}
