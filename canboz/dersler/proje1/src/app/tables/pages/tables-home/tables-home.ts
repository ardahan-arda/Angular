import { Component } from '@angular/core';
import { Divider } from '../../../shared/components/divider/divider';
import { Table } from '../../components/table/table';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Tabs } from '../../components/tabs/tabs';

@Component({
   selector: 'app-tables-home',
   imports: [Divider, Table, RouterLink, RouterLinkActive, Tabs],
   templateUrl: './tables-home.html',
   styleUrl: './tables-home.css',
})
export class TablesHome {}
