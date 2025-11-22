import { Component } from '@angular/core';
import { Placeholders } from '../../components/placeholders/placeholders';
import { Divider } from '../../../shared/components/divider/divider';
import { Segment } from '../../components/segment/segment';

@Component({
  selector: 'app-placeholders-home',
  imports: [Placeholders, Divider, Segment],
  templateUrl: './placeholders-home.html',
  styleUrl: './placeholders-home.css',
})
export class PlaceholdersHome {}
