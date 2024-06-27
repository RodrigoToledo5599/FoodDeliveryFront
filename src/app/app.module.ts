import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ServingItemComponent } from './pages/serving-item/serving-item.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { HomeService } from './pages/home/home.services';
import { UserNotFoundComponent } from './error-pages/user-not-found/user-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginCardComponent,
    HomeComponent,
    ServingItemComponent,
    HeaderBarComponent,
    UserNotFoundComponent,

    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
  ],
  providers: [
    CookieService,
    HomeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
