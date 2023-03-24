import { Component, OnInit } from '@angular/core';
import { TicketModel } from 'src/app/models/ticket.model';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {

  ticket: TicketModel = {
    content: `Lorem ipsum dolor sit amet eum`,
    categoryId: 3,
    date_creation: '24/03/23, 10:48',
    senderId: 1,
    statusId: 2,
    supportId: 2,
    ticketId: 1
  }

  tabUser = [
    'Jacqueline de la compta',
    'Frédéric le techos',
  ];

  tabStatus = [
    'Annoncé',
    'Pris en charge',
    'Résolu',
  ];

  tabMessage = [
    [`Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Cupiditate aperiam voluptate aut nostrum eum dignissimos dolor ea, excepturi ipsum 
    aliquid est sed minima alias deleniti mollitia veritatis libero corrupti perspiciatis?`, '24/03/23, 10:48'],
    [`Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Cupiditate aperiam voluptate aut nostrum eum dignissimos dolor ea, excepturi ipsum 
    aliquid est sed minima alias deleniti mollitia veritatis libero corrupti perspiciatis? Cupiditate aperiam voluptate aut nostrum eum dignissimos dolor ea, excepturi ipsum 
    aliquid est sed minima alias deleniti mollitia veritatis libero corrupti perspiciatis?`, '24/03/23, 10:50'],
    [`Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Cupiditate aperiam voluptate aut nostrum eum dignissimos dolor ea, excepturi ipsum 
    aliquid est sed minima alias deleniti mollitia veritatis libero corrupti perspiciatis?`, '24/03/23, 18:55'],
    [`Lorem ipsum dolor sit amet consectetur adipisicing elit.Cupiditate aperiam voluptate aut nostrum eum dignissimos dolor ea, excepturi ipsum 
    aliquid est sed minima alias deleniti mollitia veritatis libero corrupti perspiciatis?
    Cupiditate aperiam voluptate aut nostrum eum dignissimos dolor ea, excepturi ipsum 
    aliquid est sed minima alias deleniti mollitia veritatis libero corrupti perspiciatis?`, '24/03/23, 18:59']
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
