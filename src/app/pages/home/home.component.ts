import { Component, OnInit } from '@angular/core';
import { TicketModel } from 'src/app/models/ticket.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ticketList: TicketModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
