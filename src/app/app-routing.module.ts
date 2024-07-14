import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { PratoComponent } from './pages/prato/prato.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { UserNotFoundComponent } from './error-pages/user-not-found/user-not-found.component';



const routes: Routes = [

  // { path: '' , component: AppComponent},
  { path: '', component: LoginCardComponent },
  { path: 'prato/:pratoId', component: PratoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user_not_found', component: UserNotFoundComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
