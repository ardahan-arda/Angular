import { AfterViewInit, Component } from '@angular/core';
import { combineLatest, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: '../app.html',
  styleUrl: '../app.css',
})
export class App implements AfterViewInit {
  ngAfterViewInit(): void {
    //? combineLatest ile iki farklı inputun (derece ve dönüşüm tipi) değişimini birlikte dinliyoruz.
    //? Her iki inputta bir değişiklik olduğunda, son değerler birlikte alınır ve konsola yazdırılır.
    //? Derece için 'input', dönüşüm tipi için 'change' eventi kullanılıyor.

    const temperature = document.querySelector('#temperature-input');
    const conversion = document.querySelector('#conversion-dropdown');
    const resultText = document.querySelector('#result-text');

    if (!temperature) {
      return;
    }

    if (!conversion) {
      return;
    }

    const temperatureEvent$ = fromEvent(temperature, 'input');
    const conversionEvent$ = fromEvent(conversion, 'change');

    //? combineLatest ile tüm observable'lar en az bir kez değer yaymadan hiçbir çıktı üretmez.
    //? Her observable ilk değerini yaydıktan sonra, herhangi birinde değişiklik olursa son değerler birlikte döner.

    combineLatest([temperatureEvent$, conversionEvent$]).subscribe(
      ([temperatureEvent, conversionEvent]) => {
        const temperature = Number((temperatureEvent.target as HTMLInputElement).value);
        const conversion = (conversionEvent.target as HTMLSelectElement).value;

        let result: number | undefined;
        if (conversion === 'f-to-c') {
          result = ((temperature - 32) * 5) / 9;
        } else if (conversion === 'c-to-f') {
          result = (temperature * 9) / 5 + 32;
        }

        if (result !== undefined) {
          resultText!.innerHTML = String(result);
        } else {
          resultText!.innerHTML = 'Geçersiz dönüşüm tipi';
        }
      }
    );
  }
}
