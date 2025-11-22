import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class ProductsComponent {
  @Input() id: number | undefined; // id querysini yakalamak için
  @Input() name: string | undefined;
  @Input() page: string | undefined;
}
