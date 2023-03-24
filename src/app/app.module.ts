import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { LoginComponent } from './pages/login/login.component';
import { MyPageComponent } from './pages/my-page/my-page.component';
import { TicketCardComponent } from './component/ticket-card/ticket-card.component';
import { HeaderComponent } from './component/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { AddTicketComponent } from './pages/add-ticket/add-ticket.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ticket', component: TicketComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TicketComponent,
    LoginComponent,
    MyPageComponent,
    TicketCardComponent,
    HeaderComponent,
    AddTicketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
