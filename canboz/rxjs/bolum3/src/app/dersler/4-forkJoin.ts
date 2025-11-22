import { Component } from '@angular/core';
import { endWith, forkJoin, of, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: '../app.html',
  styleUrl: '../app.css',
})
export class App {
  constructor() {
    //? forkJoin(), kendisine verilen tüm observable'ların tamamlanmasını bekler ve her birinden son yayılan değeri alır.
    // const observable = forkJoin({
    //   deger1: of(1, 3, 2),
    //   deger2: Promise.resolve('ARD'),
    //   deger3: timer(2000),
    // });

    // observable.subscribe({
    //   next: (value) => console.log(value),
    //   complete: () => console.log('Complete'),
    // });

    const randomUser$ = ajax<any>('https://randomuser.me/api');

    // randomUser$.subscribe((ajxResponse) => {
    //   console.log(ajxResponse.response.results[0].name.first);
    // });
    // randomUser$.subscribe((ajxResponse) => {
    //   console.log(ajxResponse.response.results[0].name.first);
    // });
    // randomUser$.subscribe((ajxResponse) => {
    //   console.log(ajxResponse.response.results[0].name.first);
    // });

    //? forkJoin ile aynı anda birden fazla API çağrısı yapılabilir.
    //? Tüm çağrılar tamamlandığında, her birinin son cevabı dizi olarak döner.
    //? Burada üç farklı randomuser API çağrısı yapılıyor ve her birinden gelen ilk kullanıcının adı konsola yazdırılıyor.
    forkJoin([randomUser$, randomUser$, randomUser$]).subscribe({
      next: ([randomUser1, randomUser2, randomUser3]) =>
        console.log(
          `${randomUser1.response.results[0].name.first} ${randomUser2.response.results[0].name.first} ${randomUser3.response.results[0].name.first}`
        ),
    });
  }
}
