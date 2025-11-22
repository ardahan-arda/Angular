import { Component } from '@angular/core';
import { Modal } from '../../components/modal/modal';
import { Divider } from '../../../shared/components/divider/divider';

@Component({
   selector: 'app-popups-home',
   imports: [Modal, Divider],
   templateUrl: './popups-home.html',
   styleUrl: './popups-home.css',
})
export class PopupsHome {
   modalOpen = false;
   onClick() {
      this.modalOpen = !this.modalOpen;
   }
}
