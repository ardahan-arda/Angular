import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-class-ngclass',
  imports: [NgClass],
  templateUrl: './class-ngclass.html',
  styleUrl: './class-ngclass.css',
})
export class ClassNgclass {
  pClassName: string = 'red';
}
