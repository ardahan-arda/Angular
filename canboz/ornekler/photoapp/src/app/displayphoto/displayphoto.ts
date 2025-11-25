import { Component, inject } from '@angular/core';
import { Photo } from '../photo';

@Component({
   selector: 'app-displayphoto',
   imports: [],
   templateUrl: './displayphoto.html',
   styleUrl: './displayphoto.css',
})
export class Displayphoto {
   photoUrl: string | undefined;

   constructor(private photoService: Photo) {
      this.getImages();
   }

   getImages() {
      this.photoService.getPhotos().subscribe((response) => {
         this.photoUrl = response.urls.regular;
      });
   }

   onClick() {
      this.getImages();
   }
}
