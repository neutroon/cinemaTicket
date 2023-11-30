import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { CharttComponent } from './components/chart/chart.component';
import { UsersComponent } from './components/users/users.component';
import { DeviderComponent } from './components/divider/divider.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartModule } from 'primeng/chart';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TicketComponent,
    CharttComponent,
    UsersComponent,
    DeviderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    ChartModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
