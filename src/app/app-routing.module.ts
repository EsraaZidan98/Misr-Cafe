import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { OtherComponent } from './Other/Other.component';
import { MachinesComponent } from './machines/machines.component';
import { MachineryComponent } from './machinery/machinery.component';
import { ToolsComponent } from './tools/tools.component';
import { AboutComponent } from './about/about.component';
import { CotactusComponent } from './cotactus/cotactus.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { BuyComponent } from './buy/buy.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"coffee", component:CoffeeComponent},
  {path:"other", component:OtherComponent},
  {path:"machines", component:MachinesComponent},
  {path:"machinery", component:MachineryComponent},
  {path:"tools", component:ToolsComponent},
  {path:"about", component:AboutComponent},
  {path:"contactus", component:CotactusComponent},
  {path:"privacy", component:PrivacyComponent},
  {path:"buy", component:BuyComponent},
  {path:"login", component:LoginComponent},
  {path:"cart", component:CartComponent},
  {path:"**", redirectTo:"home", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }