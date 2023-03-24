import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TicketModel } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})


export class BackendServiceService {

  constructor(private http: HttpClient) { }

  /* getTicket(id: number): Observable<TicketModel>{
    return this.http.get<TicketModel>(`${environment.apiUrl}/ticket/${id}`)
  } */

  getAllTickets() {
    return this.http.get<TicketModel>(`${environment.apiUrl}/tickets`);
  }
  
   public getTicket =  async function(id:number){
    const response = await fetch(
      `${environment.apiUrl}/ticket/${id}`, {
        method:"GET",
        headers: {"Access-Control-Allow-Origin": "*"}
      }
    )
    if(response.ok){
      return response.json();
    }else {
      throw new Error("ta mère");
    }
}

}
