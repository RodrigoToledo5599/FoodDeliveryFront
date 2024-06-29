import { HomeService } from './home.services';
import { Component , OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Serving } from './interfaces';
import { Router } from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  servingsList: Serving[] = [];
  constructor(
    public cookie: CookieService,
    private homeService: HomeService,
    private router:Router
  ){}

  ngOnInit(){
    if(this.cookie.get('access_token') == "" || this.cookie.get('access_token') == null){
      return this.router.navigate(['/user_not_found']);
    }
    return this.homeService.loadHomePage(this.cookie.get('access_token'))
      .subscribe(
        (servings:Serving[]) => this.servingsList = servings
      );
  }
}
