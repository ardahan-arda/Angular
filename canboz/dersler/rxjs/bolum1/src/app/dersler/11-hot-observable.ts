import { AfterViewInit, Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: '../app.html',
  styleUrl: '../app.css',
})
export class App implements AfterViewInit {
  ngAfterViewInit(): void {
    const helloButton = document.querySelector('#hello');

    const helloClick$ = new Observable<MouseEvent>((subscriber) => {
      helloButton?.addEventListener('click', (event) => {
        subscriber.next(event as MouseEvent);
      });
    });

    //? Her ikisi için de aynı data geliyorsa bu bir hot observabledır.
    helloClick$.subscribe((event) => console.log('Sub 1:', event.type, event.x, event.y));
    helloClick$.subscribe((event) => console.log('Sub 2:', event.type, event.x, event.y));
  }
}
