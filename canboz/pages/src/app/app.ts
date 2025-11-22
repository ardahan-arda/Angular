import { Component, signal } from '@angular/core';
import { First } from './first';

@Component({
  selector: 'app-root',
  imports: [First],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  currentPage = 0;
  images = [
    {
      title: 'İstanbul',
      url: 'https://images.unsplash.com/photo-1618591753447-81e09996b5e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
    },
    {
      title: 'Rome',
      url: 'https://plus.unsplash.com/premium_photo-1675975706513-9daba0ec12a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
    },
    {
      title: 'İtalya',
      url: 'https://images.unsplash.com/photo-1603400567820-3e5f1a38078f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
    },
    {
      title: 'Yunanistan',
      url: 'https://images.unsplash.com/photo-1555993539-1732b0258235?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
    },
    {
      title: 'İstanbul',
      url: 'https://images.unsplash.com/photo-1618591753447-81e09996b5e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
    },
    {
      title: 'Rome',
      url: 'https://plus.unsplash.com/premium_photo-1675975706513-9daba0ec12a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
    },
    {
      title: 'İtalya',
      url: 'https://images.unsplash.com/photo-1603400567820-3e5f1a38078f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
    },
    {
      title: 'Yunanistan',
      url: 'https://images.unsplash.com/photo-1555993539-1732b0258235?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
    },
    {
      title: 'İstanbul',
      url: 'https://images.unsplash.com/photo-1618591753447-81e09996b5e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
    },
    {
      title: 'Rome',
      url: 'https://plus.unsplash.com/premium_photo-1675975706513-9daba0ec12a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
    },
    {
      title: 'İtalya',
      url: 'https://images.unsplash.com/photo-1603400567820-3e5f1a38078f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
    },
    {
      title: 'Yunanistan',
      url: 'https://images.unsplash.com/photo-1555993539-1732b0258235?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
    },
    {
      title: 'İstanbul',
      url: 'https://images.unsplash.com/photo-1618591753447-81e09996b5e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
    },
    {
      title: 'Rome',
      url: 'https://plus.unsplash.com/premium_photo-1675975706513-9daba0ec12a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
    },
    {
      title: 'İtalya',
      url: 'https://images.unsplash.com/photo-1603400567820-3e5f1a38078f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
    },
    {
      title: 'Yunanistan',
      url: 'https://images.unsplash.com/photo-1555993539-1732b0258235?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
    },
    {
      title: 'İstanbul',
      url: 'https://images.unsplash.com/photo-1618591753447-81e09996b5e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
    },
    {
      title: 'Rome',
      url: 'https://plus.unsplash.com/premium_photo-1675975706513-9daba0ec12a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
    },
    {
      title: 'İtalya',
      url: 'https://images.unsplash.com/photo-1603400567820-3e5f1a38078f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
    },
    {
      title: 'Yunanistan',
      url: 'https://images.unsplash.com/photo-1555993539-1732b0258235?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
    },
    {
      title: 'İstanbul',
      url: 'https://images.unsplash.com/photo-1618591753447-81e09996b5e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
    },
    {
      title: 'Rome',
      url: 'https://plus.unsplash.com/premium_photo-1675975706513-9daba0ec12a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
    },
    {
      title: 'İtalya',
      url: 'https://images.unsplash.com/photo-1603400567820-3e5f1a38078f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
    },
    {
      title: 'Yunanistan',
      url: 'https://images.unsplash.com/photo-1555993539-1732b0258235?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
    },
    {
      title: 'İstanbul',
      url: 'https://images.unsplash.com/photo-1618591753447-81e09996b5e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
    },
    {
      title: 'Rome',
      url: 'https://plus.unsplash.com/premium_photo-1675975706513-9daba0ec12a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
    },
    {
      title: 'İtalya',
      url: 'https://images.unsplash.com/photo-1603400567820-3e5f1a38078f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
    },
    {
      title: 'Yunanistan',
      url: 'https://images.unsplash.com/photo-1555993539-1732b0258235?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
    },
    {
      title: 'İstanbul',
      url: 'https://images.unsplash.com/photo-1618591753447-81e09996b5e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
    },
    {
      title: 'Rome',
      url: 'https://plus.unsplash.com/premium_photo-1675975706513-9daba0ec12a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
    },
    {
      title: 'İtalya',
      url: 'https://images.unsplash.com/photo-1603400567820-3e5f1a38078f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
    },
    {
      title: 'Yunanistan',
      url: 'https://images.unsplash.com/photo-1555993539-1732b0258235?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
    },
  ];

  pageIndex(index: number) {
    return Math.abs(this.currentPage - index) < 3;
  }

  previousPage() {
    if (this.currentPage) {
      this.currentPage = this.currentPage - 1;
    }
  }

  nextPage() {
    console.log('test');
    if (this.currentPage != this.images.length - 1) {
      this.currentPage = this.currentPage + 1;
    }
  }
}
