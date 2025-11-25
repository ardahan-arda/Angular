import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
   selector: 'app-modal',
   imports: [],
   templateUrl: './modal.html',
   styleUrl: './modal.css',
})
export class Modal implements OnInit {
   @Output() close = new EventEmitter();

   constructor(private el: ElementRef) {}

   ngOnInit(): void {
      document.body.appendChild(this.el.nativeElement);
   }

   ngOnDestroy(): void {
      this.el.nativeElement.remove();
   }

   onCloseClick(): void {
      this.close.emit();
   }
}
