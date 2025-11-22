import { Component } from '@angular/core';
import { Divider } from '../../../shared/components/divider/divider';
import { Statistics } from '../../components/statistics/statistics';
import { ItemList } from '../../components/item-list/item-list';

@Component({
   selector: 'app-lists-home',
   imports: [Divider, Statistics, ItemList],
   templateUrl: './lists-home.html',
   styleUrl: './lists-home.css',
})
export class ListsHome {
   numbers = [
      { value: 50, label: 'Müşteri' },
      { value: 3500, label: 'Ciro' },
      { value: 65, label: 'Yorumlar' },
   ];

   images = [
      {
         image: '/assets/images/dresser.jpeg',
         title: 'Şifonyer',
         description: 'Her türlü eşyanızı koyabileceğiniz şifonyer',
      },
      {
         image: '/assets/images/couch.jpeg',
         title: 'Kanepe',
         description: 'Oturması muhteşem rahat koltuk',
      },
   ];
}
