import { Component, OnInit } from '@angular/core';
import { ServingServices } from './serving.services';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
import { Serving } from './interfaces';
import { Router } from '@angular/router';



@Component({
  selector: 'app-serving-item',
  templateUrl: './serving-item.component.html',
  styleUrl: './serving-item.component.css'
})
export class ServingItemComponent implements OnInit{
  public serving:Serving | null = null;
  public servingId:string | null = null;
  

  constructor(
    // private routes:ActivatedRoute,
    private cookie:CookieService,
    private router:Router,
    private servingServices:ServingServices,
    private activatedRoute: ActivatedRoute,
  ){
  }

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(params =>{
      this.servingId = params.get('servingId');
    })

    if(this.cookie.get('access_token') == "" || this.cookie.get('access_token') == null){
      return this.router.navigate(['/user_not_found']);
    }
    return this.servingServices.LoadServingPage(this.cookie.get('access_token'),this.servingId)
      .subscribe(
        (serv:Serving) => this.serving = serv
      );
  }
}
