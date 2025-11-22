import { Component, signal, ViewEncapsulation } from '@angular/core';
import { Degisken } from './degisken/degisken';
import { ClassNgclass } from './class-ngclass/class-ngclass';
import { StyleNgstyle } from './style-ngstyle/style-ngstyle';
import { Twodatabinding } from './twodatabinding/twodatabinding';

@Component({
  selector: 'app-root',
  imports: [Degisken, ClassNgclass, StyleNgstyle, Twodatabinding],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None,
})
export class App {
  pClassName: string = 'red';
}
