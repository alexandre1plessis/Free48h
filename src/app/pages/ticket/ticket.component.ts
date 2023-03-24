import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TicketModel } from 'src/app/models/ticket.model';
import { BackendServiceService } from 'src/app/services/backend-service.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  argument!: string | null;
  id!: number;
  ticket: TicketModel | null = null;
  ticketSubscription!: Subscription;

  constructor(private route: ActivatedRoute,private backEndService: BackendServiceService) {}

  ngOnInit(): void {
    this.argument = this.route.snapshot.paramMap.get('id')
    if(this.argument){
      this.id = parseInt(this.argument);
      /* this.ticketSubscription = this.backEndService.getTicket(this.id).subscribe(
        (data) => {
          this.ticket = data
          console.log(data);
        }
      ) */
    }
    this.backEndService.getTicket(2);

  }

  ngOnDestroy():void{
    this.ticketSubscription.unsubscribe();
  }


}
