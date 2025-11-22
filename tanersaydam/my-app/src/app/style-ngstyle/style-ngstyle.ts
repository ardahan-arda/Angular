import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-style-ngstyle',
  imports: [NgStyle],
  templateUrl: './style-ngstyle.html',
  styleUrl: './style-ngstyle.css',
})
export class StyleNgstyle {
  bgColor: string = 'gray';
  pStyle = {
    backgroundColor: 'red',
    color: 'blue',
  };
}
