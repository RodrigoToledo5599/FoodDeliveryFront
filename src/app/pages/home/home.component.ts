import { HomeService } from './home.services';
import { Component , OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Serving } from './interfaces';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  servingsList: Serving[] = [];
  constructor(
    private cookie: CookieService,
    private homeService: HomeService,
  ){}

  ngOnInit(){
    
    this.homeService.loadHomePage(this.cookie.get('access_token'))
      .subscribe(
        (servings:Serving[]) => this.servingsList = servings
      );
  }
}
