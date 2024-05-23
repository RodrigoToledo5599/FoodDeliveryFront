import { Component, Input } from '@angular/core';
import { Serving } from './interfaces';
@Component({
  selector: 'app-serving-item',
  templateUrl: './serving-item.component.html',
  styleUrl: './serving-item.component.css'
})
export class ServingItemComponent {
  
  @Input() inputProperty:Serving;

}
