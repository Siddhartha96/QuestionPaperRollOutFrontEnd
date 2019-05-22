import { Component, OnInit } from '@angular/core';

import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { AllService } from '../all.service';
import { QPDetails } from '../qpeditor/QPDetails';
import { Request } from '@angular/http/src/static_request';
import { Requests } from '../eta/Requests';


@Component({
  selector: 'app-create-new-qp',
  templateUrl: './create-new-qp.component.html',
  styleUrls: ['./create-new-qp.component.css']
})
export class CreateNewQpComponent implements OnInit {
  createNewQp:FormGroup;
  errorMessage:string;
  successMessage:string;
  request1:Requests[];
  request2:Requests;
  qp:QPDetails;
  qp2:String[];
  createqpForm:boolean=false
  constructor(private fb:FormBuilder,private servee:AllService) { }

  ngOnInit() {
    this.servee.displayReviewerName().then(response=>{this.qp2=response,console.log(response)})
    console.log(this.qp2)
    this.createNewQp=this.fb.group({
      // qpId:['',Validators.required],
      // qpName:['',Validators.required],
      // path:['']
      qpName:['',[Validators.required]],
      emp_type:['',[Validators.required]],
      exam:['',[Validators.required]],
      reviewerName:['',[Validators.required]],
      // year:['',[Validators.required]],
      path:[''],
      creator_name:['']
      

    })
    this.servee.getREquest(localStorage.getItem('username')).then(response=>this.request1=response)
    console.log(this.request1);
  }
  showForm(data){
    this.request2=data
    this.createqpForm=!this.createqpForm;
  }
  create_qp(){

    
    this.createNewQp.controls.emp_type.setValue(this.request2.emptype);
    this.createNewQp.controls.exam.setValue(this.request2.component);
    this.createNewQp.controls.creator_name.setValue(localStorage.getItem('username'));
     this.createNewQp.controls.reviewerName.setValue(this.request2.reviewer_name)
    console.log(this.createNewQp.value);
    this.errorMessage=null;
    this.successMessage=null;
    this.servee.create_new_qp(this.createNewQp.value).then(response=>{this.qp=response,this.successMessage=response.message})
    .catch(response=>this.errorMessage=response.message)

  }
 


}
