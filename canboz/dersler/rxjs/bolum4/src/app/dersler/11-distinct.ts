import { Component } from '@angular/core';
import { distinct, first, from, interval, last, of, takeLast, takeWhile } from 'rxjs';

@Component({
   selector: 'app-root',
   imports: [],
   templateUrl: '../app.html',
   styleUrl: '../app.css',
})
export class App {
   constructor() {
      //? distinct() daha önce yayılan bir değere tekrar denk gelirse onu atlar.

      //? Örnek 1

      // of(1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6)
      //    .pipe(distinct())
      //    .subscribe((val) => console.log(val));

      //? Örnek 2

      const obj1 = { id: 3, name: 'name 1' };
      const obj2 = { id: 4, name: 'name 2' };
      const obj3 = { id: 3, name: 'name 3' };

      const vals = [obj1, obj2, obj3];

      //? id si aynı olan değerlerden yalnızca ilkini alır.

      from(vals)
         .pipe(distinct((obj) => obj.id))
         .subscribe((val) => console.log(val));
   }
}
