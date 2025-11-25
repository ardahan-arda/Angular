import { AfterViewInit, Component, signal } from '@angular/core';
import { debounceTime, filter, forkJoin, from, fromEvent, map, of, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
   selector: 'app-root',
   imports: [],
   //? Örnek 1
   //  template: ` <input
   //     type="text"
   //     id="search"
   //  />`,

   //? Örnek 2
   template: `
      <link
         rel="stylesheet"
         href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.8/css/bootstrap.min.css"
      />

      <div
         class="container"
         style="width: 300px;"
      >
         <h2 class="my-3">debounceTime</h2>

         <div class="my-4 form-inline">
            <div class="d-flex">
               <input
                  type="range"
                  id="slider"
                  class="form-range"
                  value="0"
                  min="0"
                  max="100"
               />
            </div>
         </div>
      </div>
   `,
   styleUrl: '../app.css',
})
export class App implements AfterViewInit {
   ngAfterViewInit(): void {
      //? Örnek 1

      // const searchBox = document.querySelector('#search');
      // const keyUp$ = fromEvent(searchBox!, 'keyup');
      // keyUp$
      //    .pipe(
      //       map((i: any) => i.currentTarget.value),
      //       debounceTime(2000)
      //    )
      //    .subscribe(console.log);

      //? Örnek 2

      const sliderInput = document.querySelector('#slider');

      //? debounceTime: Belirtilen süre boyunca yeni bir değer gelmezse son değeri iletir.
      //? Kullanıcı hızlıca değer değiştirirse, sadece son değişiklik belirtilen süre sonunda yayılır.
      fromEvent<InputEvent>(sliderInput!, 'input')
         .pipe(
            map((event) => (event.target as HTMLInputElement).value),
            debounceTime(2000)
         )
         .subscribe((value) => console.log(value));
   }
}
