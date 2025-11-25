import { Directive, ElementRef, inject, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFirst]',
})
export class First implements OnInit {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.padding = '10px';
    this.element.nativeElement.style.borderRadius = '10px';
  }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.backgroundColor;
  }

  @Input() backgroundColor: string = '';
}
