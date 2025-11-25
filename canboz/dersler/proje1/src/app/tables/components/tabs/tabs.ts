import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
   selector: 'app-tabs',
   imports: [RouterOutlet],
   templateUrl: './tabs.html',
   styleUrl: './tabs.css',
})
export class Tabs {}
