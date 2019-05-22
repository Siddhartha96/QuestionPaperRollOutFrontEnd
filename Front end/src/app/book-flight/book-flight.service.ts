import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class BookFlightService {

  constructor(private http:Http) { }

  book(data):Promise<any> {
    return this.http.post("http://localhost:3333/FlightBooking_BackEnd/flight/booking",data)
    .toPromise()
    .then((response)=>response.json())
    .catch(this.handleError);
    
  }

  handleError(error){
    return Promise.reject(error.json() || error);
  }

}   