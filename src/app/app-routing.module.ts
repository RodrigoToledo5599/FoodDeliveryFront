import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { ServingItemComponent } from './components/serving-item/serving-item.component';




const routes: Routes = [

  // { path: '' , component: AppComponent},
  { path: '', component: HomeComponent },
  { path: '/serving/:servingId', component: ServingItemComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
