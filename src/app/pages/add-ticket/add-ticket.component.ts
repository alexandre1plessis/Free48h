import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  sujet = '';
  categoryList: string[] = ['Tous', 'Matériels', 'Connectiques', 'Autres'];

  constructor() { }

  ngOnInit(): void {
  }


  validateForm() {
    
  }

}
