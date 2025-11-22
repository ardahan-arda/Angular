import { Component } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: '../app.html',
  styleUrl: '../app.css',
})
export class App {
  constructor() {
    const ajax$ = ajax<any>('https://jsonplaceholder.typicode.com/users');

    ajax$.subscribe((data) => {
      console.log(data);
      data.response.forEach(
        (user: {
          id: number;
          name: string;
          address: {
            city: string;
            street: string;
            suite: string;
            zipcode: string;
            geo: { lat: string; lng: string };
          };
          company: { bs: string; name: string };
        }) => {
          console.log(user.address.geo.lat, user.address.geo.lng);
        }
      );
    });
  }
}
