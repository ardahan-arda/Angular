import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, MatIconModule, MatButtonToggleModule],
  templateUrl: './dersler/2-buttonToggle/app.html',
  styleUrl: './dersler/2-buttonToggle/app.css',
})
export class App {
  protected readonly title = signal('material');
}
