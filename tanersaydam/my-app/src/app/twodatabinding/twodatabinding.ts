import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twodatabinding',
  imports: [FormsModule],
  templateUrl: './twodatabinding.html',
  styleUrl: './twodatabinding.css',
})
export class Twodatabinding {
  text: string = 'hello world';
  select: string = '';
  changeText(event: any) {
    this.text = event.target.value;
  }
}
