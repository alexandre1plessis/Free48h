import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddTicketComponent } from './pages/add-ticket/add-ticket.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyPageComponent } from './pages/my-page/my-page.component';
import { TicketComponent } from './pages/ticket/ticket.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'createTicket', component: AddTicketComponent},
  { path: 'ticket', component: TicketComponent},
  { path: 'myPage', component: MyPageComponent},
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
