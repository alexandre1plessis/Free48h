import { Component, OnInit, Input } from '@angular/core';
import { TicketModel } from 'src/app/models/ticket.model';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.css']
})
export class TicketCardComponent implements OnInit {

  @Input() ticket: TicketModel | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
