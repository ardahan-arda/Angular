import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';
import { LayoutsComponent } from './layouts/layouts';
import { LoginComponent } from './login/login';
import { ProductsComponent } from './products/products';

export const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      { path: 'contact', component: ContactComponent },
      { path: 'contact/:params', component: ContactComponent }, // :params contact sayfasına giderken değer göndermek için kullanılıyor. Değeri ActivatedRoute ile yakalıyoruz.
      { path: 'products', component: ProductsComponent },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
