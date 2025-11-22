import { Component, Input } from '@angular/core';

@Component({
   selector: 'app-statistics',
   imports: [],
   templateUrl: './statistics.html',
   styleUrl: './statistics.css',
})
export class Statistics {
   @Input() data: any = [];
}
