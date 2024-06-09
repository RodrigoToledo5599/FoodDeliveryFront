import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serving-item',
  templateUrl: './serving-item.component.html',
  styleUrl: './serving-item.component.css'
})
export class ServingItemComponent implements OnInit{
  servingId:string | null = null;

  constructor(
    private routes:ActivatedRoute
  ){}

  ngOnInit() {
    this.routes.paramMap.subscribe(params => {
      this.servingId = params.get('servingId');
    });
  }
}
