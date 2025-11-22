import { Component } from '@angular/core';

@Component({
  selector: 'app-degisken',
  imports: [],
  templateUrl: './degisken.html',
  styleUrl: './degisken.css',
})
export class Degisken {
  fullName: string = 'Ardahan ARDA';

  clickedButton() {
    this.fullName = this.fullName + ' ' + 'Gülizar';
  }

  changeName(event: any) {
    this.fullName = event.target.value;
  }
}
