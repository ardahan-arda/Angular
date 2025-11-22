import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[renklendir]',
})
export class Renklendir {
  constructor(private el: ElementRef) {}

  @Input('renklendir') color: string | undefined;
  @Input('deneme') deneme: string | undefined;
  @Input('test') name: string | undefined;

  @HostListener('mouseenter') method1() {
    this.el.nativeElement.style = 'color:red';
    console.log(this.color);
    console.log('Mouse Elementi üzerine geldi');
  }

  @HostListener('mouseleave') method2() {
    this.el.nativeElement.style = '';
    console.log(this.name);
    console.log('Mouse Elementi üzerinden ayrıldı');
    console.log(this.deneme);
  }
}
