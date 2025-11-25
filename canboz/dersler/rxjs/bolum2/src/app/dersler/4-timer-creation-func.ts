import { AfterViewInit, Component } from '@angular/core';
import { from, fromEvent, Observable, timer } from 'rxjs';

@Component({
   selector: 'app-root',
   imports: [],
   templateUrl: '../app.html',
   styleUrl: '../app.css',
})
export class App implements AfterViewInit {
   ngAfterViewInit(): void {
      //? Belirli bir süre sonra observable oluşturur.
      const subscription = timer(2000).subscribe({
         next: (value) => console.log(value),
         complete: () => console.log('Completed'),
      });

      //? Observable 2 sn sonra oluşacağından 1 sn sonra unsubscribe yaparsak observable oluşmaz.
      // setTimeout(() => {
      //    console.log('Unsubscribe');
      //    subscription.unsubscribe();
      // }, 1000);

      setTimeout(() => {
         console.log('Unsubscribe');
         subscription.unsubscribe();
      }, 3000);
   }
}
