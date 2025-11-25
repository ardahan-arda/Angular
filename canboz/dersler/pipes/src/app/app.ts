import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, TitleCasePipe } from '@angular/common';
import { ConvertPipe } from './convert-pipe';

@Component({
  selector: 'app-root',
  imports: [TitleCasePipe, DatePipe, CurrencyPipe, DecimalPipe, JsonPipe, ConvertPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  name = '';
  date = '';
  money: number = 0;
  height: number = 0;
  miles: number = 0;
  lessons = { name: 'Matematik', subject: 'NaturalNumber', currentPoint: 65 };

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.date = value;
  }

  onMoneyChange(value: string) {
    this.money = parseFloat(value);
  }

  onHeighChange(value: string) {
    this.height = parseFloat(value);
  }

  onMilesChange(value: string) {
    this.miles = parseFloat(value);
  }
}
