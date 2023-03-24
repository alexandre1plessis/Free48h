import { Component, OnInit } from '@angular/core';
import { TicketModel } from 'src/app/models/ticket.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ticketList: TicketModel[] = [];
  
  filterAll = false;
  filterMaterials = false;
  filterConnectics = false;
  filterOthers = false;

  constructor() { }

  ngOnInit(): void {
    this.loadTicket();
  }

  loadTicket(): void {
    this.ticketList = [0, 1 , 2];
  }

}
