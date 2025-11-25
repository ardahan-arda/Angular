import { Component } from '@angular/core';
import { faker as f } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  randomText: string = f.lorem.sentence();
  enteredText: string = '';

  getInputValue(value: string) {
    this.enteredText = value;
  }

  compare(randomLetter: string, enteredLetter: string): string {
    if (!enteredLetter) {
      return 'pending';
    }

    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
