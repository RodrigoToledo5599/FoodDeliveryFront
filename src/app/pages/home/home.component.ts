import { Component , OnInit } from '@angular/core';
import { BASE_URL } from '../../../api/api';
import { HttpClient } from '@angular/common/http';
import { Serving,Token } from './interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  
  constructor(
    private http : HttpClient
  ){}
  
  url = BASE_URL + 'api/home';
  serving: Serving ={
    id:"",
    Name: "",
    Price: "",
    Description:""
  }
  servingsList: Serving[] = [];

  token: Token ={
    token:""
  }
  
  ngOnInit(){
    this.http.get<Serving[]>(this.url)
      .subscribe(servingsList => this.servingsList = servingsList)
      console.log(this.servingsList)
  }

  
  
}
