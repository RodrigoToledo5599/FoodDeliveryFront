import { Component, OnInit, Inject } from '@angular/core';
import { BASE_URL } from '../../../api/api';
import { HttpClient } from '@angular/common/http';
import { LoginForm,Token } from './interfaces';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.css',
})


export class LoginCardComponent{
  constructor(
    private http: HttpClient,
    private router:Router
  ){}
  url = BASE_URL + 'api/login'
  loginform: LoginForm ={
    email: "",
    password: ""
  }

  LoadHomePage(){
    console.log('se chegou aq tu é gay')
    return this.router.navigate(['/home'])
  }

  loginIn (data:LoginForm){
    this.http.post<Token>(this.url,data)
      .subscribe((response:Token ) => {
        console.log(response.token);
      });
    this.LoadHomePage()
  }




}
