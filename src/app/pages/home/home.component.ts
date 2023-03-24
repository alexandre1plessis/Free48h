import { Component, OnInit } from '@angular/core';
import { TicketModel } from 'src/app/models/ticket.model';
import { BackendServiceService } from 'src/app/services/backend-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  filterAll = false;
  filterMaterials = false;
  filterConnectics = false;
  filterOthers = false;

  tabTickets: TicketModel[] = [
    {
      content: `Lorem ipsum dolor sit amet eum`,
      categoryId: 0,
      date_creation: '24/03/23, 10:48',
      senderId: 1,
      statusId: 2,
      supportId: 2,
      ticketId: 1
    },
    {
      content: `Lorem ipsum dolor sit amet eum`,
      categoryId: 2,
      date_creation: '24/03/23, 10:48',
      senderId: 1,
      statusId: 2,
      supportId: 2,
      ticketId: 1
    },
    {
      content: `Lorem ipsum dolor sit amet eum`,
      categoryId: 1,
      date_creation: '24/03/23, 10:48',
      senderId: 1,
      statusId: 2,
      supportId: 2,
      ticketId: 1
    },
  ];

  tabCategory = [
    'Matériels',
    'Connectivités',
    'Autres',
  ];

  constructor(private ticketService: BackendServiceService) { }

  ngOnInit(): void {
    this.loadTicket();
  }

  loadTicket(): void {
    console.log(this.ticketService.getAllTickets());
  }

}
