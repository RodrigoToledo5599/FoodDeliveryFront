import { Component, OnInit, ViewChild } from '@angular/core';
import { PratoServices } from './prato.services';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Prato } from './../../interfaces/interfaces';
import { Router } from '@angular/router';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { LocalStorageService } from './../../local-storage.service';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-prato',
  templateUrl: './prato.component.html',
  styleUrl: './prato.component.css'
})
export class PratoComponent implements OnInit{

  public prato:Prato | null = null;
  public pratoId:string | null = null;
  
  constructor(
    private cookie:CookieService,
    private router:Router,
    private pratoServices:PratoServices,
    private activatedRoute: ActivatedRoute,
    private toast: ToastrService,
    private spinner: NgxSpinnerService
  ){}


  LoadSpinner(){
    this.spinner.show();
  }

  StopSpinner(){
    this.spinner.hide();
  }
  
  public adicionadoASacola(id: string, name:string, price:string, description:string){
    console.log(id,name,price,description);
    // this.toast.success('adicionado a sacola');
  }

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(params =>{
      this.pratoId = params.get('pratoId');
    })
    if(this.cookie.get('access_token') == "" || this.cookie.get('access_token') == null){
      // this.StopSpinner();
      return this.router.navigate(['/user_not_found']);
    }
    this.pratoServices.LoadPratoPage(this.cookie.get('access_token'),this.pratoId)
      .subscribe(
        (serv:Prato) => this.prato = serv
    );
    return this.prato;
  }
}
