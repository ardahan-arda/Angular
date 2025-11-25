import { AfterViewInit, Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
   selector: 'app-root',
   imports: [],
   templateUrl: '../app.html',
   styleUrl: '../app.css',
})
export class App implements AfterViewInit {
   ngAfterViewInit(): void {
      const subscription = interval(1000).subscribe({
         next: (value) => console.log(value),
         complete: () => console.log('Completed'),
      });

      const id = setInterval(() => {
         if (subscription) {
            console.log(subscription);
         }
      }, 1100);

      setTimeout(() => {
         subscription.unsubscribe();
         clearInterval(id);
      }, 5000);
   }
}
