import { Component, OnInit, Inject } from '@angular/core';
import { BASE_URL } from '../../../api/api';
import { HttpClient } from '@angular/common/http';
import { LoginForm,Token } from './interfaces';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.css',
})


export class LoginCardComponent implements OnInit{
  constructor(public http: HttpClient){}


  url = BASE_URL + 'api/login'
  loginform: LoginForm ={
    email: 'john@example.com',
    password:'password'
  }


  loginIn (data:LoginForm){

    console.log(data)
    console.log(this.url)

    this.http.post<Token>(this.url,data)
      .subscribe((response:Token ) => {
        console.log('Data posted:', response);
      });
    }

  ngOnInit(): void {
    console.log(this.url)
  }




}
