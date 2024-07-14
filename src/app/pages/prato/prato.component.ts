import { Component, OnInit } from '@angular/core';
import { PratoServices } from './prato.services';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
import { Prato } from './interfaces';
import { Router } from '@angular/router';



@Component({
  selector: 'app-prato',
  templateUrl: './prato.component.html',
  styleUrl: './prato.component.css'
})
export class PratoComponent implements OnInit{
  public prato:Prato | null = null;
  public pratoId:string | null = null;
  

  constructor(
    // private routes:ActivatedRoute,
    private cookie:CookieService,
    private router:Router,
    private pratoServices:PratoServices,
    private activatedRoute: ActivatedRoute,
  ){
  }

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(params =>{
      this.pratoId = params.get('PratoId');
    })

    if(this.cookie.get('access_token') == "" || this.cookie.get('access_token') == null){
      return this.router.navigate(['/user_not_found']);
    }
    return this.pratoServices.LoadPratoPage(this.cookie.get('access_token'),this.pratoId)
      .subscribe(
        (serv:Prato) => this.prato = serv
      );
  }
}
