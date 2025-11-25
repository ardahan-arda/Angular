import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface CallResponse {
   urls: {
      regular: string;
   };
}

@Injectable({
   providedIn: 'root',
})
export class Photo {
   constructor(private httpClient: HttpClient) {}

   getPhotos(): Observable<CallResponse> {
      return this.httpClient.get<CallResponse>('https://api.unsplash.com/photos/random', {
         headers: {
            Authorization: 'Client-ID XidJkwiMeo5f5GWkMI7QRrZwyDJb5vK1MAClHPORugQ',
         },
      });
   }
}
