import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {SliderComponent } from './slider/slider.component';
import {MatSliderModule} from '@angular/material/slider';
import {Ng5SliderModule} from 'ng5-slider';
import { SharedModule } from "./shared/shared.module";
import { HeaderComponent } from './shared/components/header/header.component';
import { AboutComponent } from './about/about.component';
import { CotactusComponent } from './cotactus/cotactus.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { BuyComponent } from './buy/buy.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,





      SliderComponent,
                AboutComponent,
                CotactusComponent,
                PrivacyComponent,
                BuyComponent,
                LoginComponent,
                CartComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    SharedModule,
],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
