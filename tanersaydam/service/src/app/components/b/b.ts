import { Component, inject } from '@angular/core';
import { Example } from '../../service/example';

@Component({
  selector: 'app-b',
  imports: [],
  templateUrl: './b.html',
  styleUrl: './b.css',
})
export class BComponent {
  public exampleService = inject(Example);
}
