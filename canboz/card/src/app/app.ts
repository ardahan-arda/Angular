import { Component, signal } from '@angular/core';
import { Card } from './card/card';

@Component({
  selector: 'app-root',
  imports: [Card],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  posts = [
    {
      title: 'Dağ Bisikleti',
      imageUrl: 'assets/biking.jpeg',
      username: 'aadag',
      content: 'Çok hızlı sürdüm',
    },
    {
      title: 'Tırmanış',
      imageUrl: 'assets/mountain.jpeg',
      username: 'aauludag',
      content: 'Bugün de iyi tırmandım',
    },
    {
      title: 'Doğa Yürüyüşü',
      imageUrl: 'assets/tree.jpeg',
      username: 'aadoga',
      content: 'Hadi biraz Maka Parkında turlayalım',
    },
  ];
}
