import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { ChartComponent } from './components/chart/chart.component';
import { UsersComponent } from './components/users/users.component';
import { DeviderComponent } from './components/divider/divider.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TicketComponent,
    ChartComponent,
    UsersComponent,
    DeviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
