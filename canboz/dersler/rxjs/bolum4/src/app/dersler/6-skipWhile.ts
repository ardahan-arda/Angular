import { Component } from '@angular/core';
import { interval, skipWhile } from 'rxjs';

@Component({
   selector: 'app-root',
   imports: [],
   templateUrl: '../app.html',
   styleUrl: '../app.css',
})
export class App {
   constructor() {
      //? İçerisindeki sonuç true olduğu sürece atlar.
      const source = interval(1000);

      source.pipe(skipWhile((val) => val < 5)).subscribe((val) => console.log(val));
   }
}
