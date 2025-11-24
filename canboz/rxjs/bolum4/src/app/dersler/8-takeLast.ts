import { Component } from '@angular/core';
import { of, takeLast } from 'rxjs';

@Component({
   selector: 'app-root',
   imports: [],
   templateUrl: '../app.html',
   styleUrl: '../app.css',
})
export class App {
   constructor() {
      //? İstenilen sayıda son değeri alır ve sıralı döner (mesela 5 elemanlı bir dizide sondan 2 elamnı alır ve sıralı olarak (4. - 5.) döner)
      const source = of('Ardahan', 'Gülhizar', 'Duru');

      source.pipe(takeLast(2)).subscribe((val) => console.log(val));
   }
}
