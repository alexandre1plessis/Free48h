import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { LoginComponent } from './pages/login/login.component';
import { MyPageComponent } from './pages/my-page/my-page.component';
import { MiniatureTicketComponent } from './composants/miniature-ticket/miniature-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TicketComponent,
    LoginComponent,
    MyPageComponent,
    MiniatureTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
