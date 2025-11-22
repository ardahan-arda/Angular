import { Component, signal } from '@angular/core';
import { Renklendir } from './renklendir';
import { Validation } from './validation/validation';

@Component({
  selector: 'app-root',
  imports: [Validation],
  // imports: [Renklendir],
  // template: ` <h1 renklendir="green" deneme="de" test="Arda">Directive</h1> `,
  templateUrl: './app.html',
})
export class App {}
