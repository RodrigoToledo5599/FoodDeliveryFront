import { Component } from '@angular/core';
import { BASE_URL } from '../../../api/api';
import { HttpClient } from '@angular/common/http';
import { LoginForm,Token } from './interfaces';
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.css',
})


export class LoginCardComponent{
  constructor(
    private http: HttpClient,
    private router:Router,
    private cookie:CookieService
  ){}

  url = BASE_URL + 'api/login'
  loginform: LoginForm ={
    email: "",
    password: ""
  }
  access_token:Token = {
    token:""
  }

  loginIn (data:LoginForm){
    this.http
      .post<Token>(this.url,data)
      .subscribe((response:Token ) => {
        this.access_token.token = response.token;
        this.cookie.set('access_token', response.token);
        this.router.navigate(['/home']);
        },
        (error) =>{
          console.error('Login error: ',error);
        }
      );
  }

}
