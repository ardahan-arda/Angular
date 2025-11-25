import { Component } from '@angular/core';
import { endWith, of, startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: '../app.html',
  styleUrl: '../app.css',
})
export class App {
  constructor() {
    const source = of(1, 2, 3);
    //? source observable ına başlangıç ve bitiş değer ataması yapar.
    const example = source.pipe(startWith(0), endWith(11));
    const subscribe = example.subscribe((val) => console.log(val));
  }
}
