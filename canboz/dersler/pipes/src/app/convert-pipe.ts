import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: number, type: string = ''): number {
    const factor = 1.60934;
    const newValue = value * factor;

    switch (type) {
      case 'm':
        return newValue * 1000;
      case 'cm':
        return newValue * 1000 * 100;
      default:
        return newValue;
    }
  }
}
