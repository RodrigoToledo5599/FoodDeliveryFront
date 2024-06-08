import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ServingItemComponent } from './components/serving-item/serving-item.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginCardComponent,
    HomeComponent,
    ServingItemComponent,
    HeaderBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
