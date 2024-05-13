import { Component, OnInit, Inject } from '@angular/core';
import { BASE_URL } from '../../../api/api';
import { HttpClient } from '@angular/common/http';
import { LoginForm } from './interfaces';


@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.css',
})


export class LoginCardComponent implements OnInit{


  url = BASE_URL + 'api/login'
  http = Inject(HttpClient)


  loginData :LoginForm = {
    email:'',
    password:''
  }

  loginIn(data: LoginForm){
    // console.log('chegou aq')
    console.log(data.email)
    this.http.post(this.url,data)
      // .subscribe(response => {
      //   console.log("data posted",response)
      // })
  }

  ngOnInit(): void {
    console.log(this.url)
  }




}
