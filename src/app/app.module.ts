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
import { PratoComponent } from './pages/prato/prato.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { HomeService } from './pages/home/home.services';
import { UserNotFoundComponent } from './error-pages/user-not-found/user-not-found.component';
import { PratoServices } from './pages/prato/prato.services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    LoginCardComponent,
    HomeComponent,
    PratoComponent,
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
    BrowserAnimationsModule,
    NgxSpinnerModule
  
  ],
  providers: [
    CookieService,
    HomeService,
    PratoServices,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
