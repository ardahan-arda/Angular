import { AfterViewInit, Component } from '@angular/core';
import { from, fromEvent, Observable } from 'rxjs';

@Component({
   selector: 'app-root',
   imports: [],
   templateUrl: '../app.html',
   styleUrl: '../app.css',
})
export class App implements AfterViewInit {
   ngAfterViewInit(): void {
      const saveButton = document.querySelector('#saveButton');

      const subscription = fromEvent<MouseEvent>(saveButton!, 'click').subscribe({
         next: (event) => console.log(event.type, event.x, event.y),
      });

      setTimeout(() => {
         console.log('Unsubscribe');
         subscription.unsubscribe();
      }, 3000);

      //? fromEvent() olmadan aşağıdaki şekilde yazılırdı.
      // const saveClick$ = new Observable<MouseEvent>((subscriber) => {
      //    const clickHandler = (event: any) => {
      //       subscriber.next(event as MouseEvent);
      //    };

      //    saveButton?.addEventListener('click', clickHandler);

      //    return () => {
      //       saveButton?.removeEventListener('click', clickHandler);
      //    };
      // });

      // const subscription = saveClick$.subscribe((event) => {
      //    console.log(event.type, event.x, event.y);
      // });

      // setTimeout(() => {
      //    console.log('Unsubscribe');
      //    subscription.unsubscribe();
      // }, 3000);
   }
}
