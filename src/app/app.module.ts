import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WearsComponent } from './wears/wears.component';
import { TopComponent } from './top/top.component';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';

import { WearService } from './wear.service';

@NgModule({
  declarations: [
    AppComponent,
    WearsComponent,
    TopComponent,
    DetailComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [WearService],
  bootstrap: [AppComponent]
})
export class AppModule { }
