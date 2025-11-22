import { Component } from '@angular/core';
import { interval, mapTo, merge, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: '../app.html',
  styleUrl: '../app.css',
})
export class App {
  constructor() {
    // let list1 = of(1, 2, 3, 4, 5);
    // let list2 = of(6, 7, 8, 9, 10);
    // let final_val = merge(list1, list2);
    // final_val.subscribe((x) => console.log(x));

    //? merge() operatörü, kendisine verilen observable'ların tamamlanmasını beklemeden, hepsinden gelen değerleri eşzamanlı olarak yayar.
    //? Yani, concat() gibi sırayla ve tamamlanmayı bekleyerek çalışmaz; tüm observable'lar aynı anda çalışır ve değerlerini yayınlar.
    const first = interval(1500);
    const second = interval(2000);

    const example = merge(first.pipe(mapTo('First!')), second.pipe(mapTo('Second!')));

    const subscribe = example.subscribe((val) => console.log(val));
  }
}
