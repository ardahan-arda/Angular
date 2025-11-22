import { Component, inject } from '@angular/core';
import { BComponent } from '../b/b';
import { FormsModule } from '@angular/forms';
import { Example } from '../../service/example';

@Component({
  selector: 'app-a',
  imports: [BComponent, FormsModule],
  templateUrl: './a.html',
  styleUrl: './a.css',
})
export class AComponent {
  public exampleService = inject(Example);
}
