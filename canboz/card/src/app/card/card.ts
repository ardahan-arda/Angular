import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() title: string = '';
  @Input() imageUrl: string = '';
  @Input() username: string = '';
  @Input() content: string = '';
}
