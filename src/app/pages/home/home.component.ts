import { Component , OnInit } from '@angular/core';
import { BASE_URL } from '../../../api/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Serving } from './interfaces';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private cookie: CookieService,
  ){}

  url = BASE_URL + 'api/home';
  serving: Serving ={
    id:"",
    Name: "",
    Price: "",
    Description:""
  }
  servingsList: Serving[] = [];
  token:string  = this.cookie.get('access_token');

  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + this.token
  });

  ngOnInit(){
    console.log(this.token);
    this.http.get<Serving[]>(this.url , {headers: this.header})
      .subscribe(servingsList => this.servingsList = servingsList)
  }



}
