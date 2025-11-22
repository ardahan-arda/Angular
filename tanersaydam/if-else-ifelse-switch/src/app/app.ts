import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    @if (showFistWord){
    <p style="color: red;">Birinci {{ showFistWord === true ? 'red' : '' }}</p>
    } @if(showSecondWord){
    <p style="color: green;">İkinci</p>
    }
    <hr />
    <button (click)="showWord(1)">Birinci</button>
    <button (click)="showWord(2)">İkinci</button>
  `,
  styleUrl: './app.css',
})
export class App {
  showFistWord: boolean = false;
  showSecondWord: boolean = false;

  showWord(num: number) {
    // if (num === 1) {
    //   this.showFistWord = true;
    //   this.showSecondWord = false;
    // } else {
    //   this.showFistWord = false;
    //   this.showSecondWord = true;
    // }

    switch (num) {
      case 1:
        this.showFistWord = true;
        this.showSecondWord = false;
        break;
      case 2:
        this.showFistWord = false;
        this.showSecondWord = true;
        break;

      default:
        this.showFistWord = false;
        this.showSecondWord = false;
    }
  }
}
