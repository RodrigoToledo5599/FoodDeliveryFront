import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { ServingItemComponent } from './pages/serving-item/serving-item.component';
import { LoginCardComponent } from './components/login-card/login-card.component';



const routes: Routes = [

  // { path: '' , component: AppComponent},
  { path: '', component: LoginCardComponent },
  { path: 'serving/:servingId', component: ServingItemComponent },
  { path: 'home', component: HomeComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
