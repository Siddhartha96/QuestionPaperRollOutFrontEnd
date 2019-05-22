import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BookFlightService } from './book-flight.service';
import { PassengerNameValidator } from './passenger-name.validator';
import { Promise } from 'q';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {
  successMessage:string;
  errorMessage:String;
  bookingId:any;
  bookingForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private bookFlightService:BookFlightService) { }


  ngOnInit() {
    this.bookingForm=this.formBuilder.group({
      passengerName:['',[Validators.required,PassengerNameValidator.checkName]],
      noOfTickets:['',[Validators.required,Validators.min(1)]]
      ,flights:this.formBuilder.group({
        flightId:['',[Validators.required,Validators.pattern("[0-9]{4}")]]
      })
    });
  }

  book() {
    this.errorMessage=null;
    this.successMessage=null;
    this.bookingId=null;
    this.bookFlightService.book(this.bookingForm.value)
    .then(response=>this.bookingId=response)
    .catch(error=>this.errorMessage=error.message)
  }

}