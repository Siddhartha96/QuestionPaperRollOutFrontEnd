import { Component, OnInit } from '@angular/core';
import { QPDetails } from '../qpeditor/QPDetails';
import { Router } from '@angular/router';
import { AllService } from '../all.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { BatchDetails } from './batchDetails';
import { validateConfig } from '@angular/router/src/config';


@Component({
  selector: 'app-eta',
  templateUrl: './eta.component.html',
  styleUrls: ['./eta.component.css']
})
export class EtaComponent implements OnInit {

  qpData3: QPDetails[];
  qpData4: QPDetails[];
  showReview: boolean=false;
  showdetails:boolean=false;
  qpData:QPDetails;
  qpData2:QPDetails;
  qpData1:QPDetails[];
  getAllqp:QPDetails;
  errorMessage:string;
  successMessage:string;
  sMessage:String;
  qp:QPDetails;
  updateForm:FormGroup;
  selectBatch:FormGroup;
  createRequest:FormGroup;
  batchid:BatchDetails[];
  showQpDetails:boolean=false
  showd:boolean=false;
  reviewerName1:String[]
  creatorName1:String[];
  successMessage1:string;
  constructor(private router:Router,private servee:AllService,private fb:FormBuilder) { 
    // if(this.servee.getUserLoggedIn()==false)
    // {
    //   this.router.navigate(['/login'])
    // }
  }

  ngOnInit(){
    this.servee.showBatch().then(response=>this.batchid=response)
    this.servee.getAllEtaFiles().then(response=>this.qpData1=response).catch(response=>console.log(response.errorMessage))
    // this.updateForm=this.fb.group({
    //   qpId:[''],
    //   // qpName:[],
    //   description:['']
    // })
    // this.servee.getAllQp().then(response=>this.qpData1=response).catch(response=>console.log(response.errorMessage))
  this.createRequest=this.fb.group({
    emptype:['',Validators.required],
    component:['',Validators.required],
    reviewer_name:['',Validators.required],
    creator_name:['',Validators.required],
    deadline_date:['',Validators.required]
  })
    this.selectBatch=this.fb.group({
      batchname:['',Validators.required],
      exam:['',Validators.required]
   })
   this.servee.displayReviewerName().then(response=>this.reviewerName1=response);
   this.servee.displayCreatorName().then(response=>this.creatorName1=response);
  

  }
  download_qp(data){
    console.log(data);
    // this.errorMessage=null;
    // this.successMessage=null;
    this.servee.download_qp(data).then(response=>{this.qpData=response})
    .catch(response=>console.log(response.errorMessage))
    alert("File Downloaded Successfully");
    

  }

   qpRollOut(data:string){
     this.successMessage1=null
     console.log(data);
    this.servee.qpRollOut(data).then(response=>{this.successMessage1=response,this.ngOnInit()
    })
    alert("Rolled Out Successfully");
   }

   showQp(){
    this.showdetails=!this.showdetails;
    this.servee.showQp(this.selectBatch.value).then(response=>this.qpData4=response)
   }

   createREquest(){
     this.successMessage=null;
    this.servee.createREquest(this.createRequest.value).then(response=>{this.successMessage=response.message,console.log(response)})
   }
   show(data){
     this.showd=!this.showd;
     this.qpData2=data;
   }
        // download_qp(data){
        //   console.log(data);
        //   // this.errorMessage=null;
        //   // this.successMessage=null;
        //   this.servee.download_qp(data).then(response=>{this.qpData=response})
        //   .catch(response=>console.log(response.errorMessage))
          
      
        // }
        
      
}
