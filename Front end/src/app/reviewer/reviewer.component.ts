import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllService } from '../all.service';

import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { QPDetails } from '../qpeditor/QPDetails';


@Component({
  selector: 'app-reviewer',
  templateUrl: './reviewer.component.html',
  styleUrls: ['./reviewer.component.css']
})
export class ReviewerComponent implements OnInit {

  qpData3: QPDetails[];
  uploadQpForm: boolean=false;
  showdetails:boolean=false;
  qpData:QPDetails;
  qpData2:QPDetails;
  qpData1:QPDetails[];
  getAllqp:QPDetails;
  errorMessage:string;
  successMessage:string;
  errorMessage1:string;
  successMessage1:string;
  errorMessage2:string;
  successMessage2:String;
  qp:QPDetails;
  updateForm:FormGroup;
  remarks:FormGroup;
  username3:string;
  changeStatus:String;
  qppId:string;
  constructor(private router:Router,private servee:AllService,private fb:FormBuilder) { 
    // if(this.servee.getUserLoggedIn()==false)
    // {
    //   this.router.navigate(['/login'])
    // }
  }

  ngOnInit(){
    this.updateForm=this.fb.group({
      qpId:[''],
      // qpName:[],
      path:['']

    })

    this.remarks=this.fb.group({
      qpId:['',Validators.required],
      remarks:['',Validators.required]
    })
    this.servee.currentMessage.subscribe(message => this.username3 = message)
    this.servee.reviewfiles(this.username3)
    .then(response=>this.qpData1=response).catch(response=>console.log(response.errorMessage))

    // this.servee.getAllQp().then(response=>this.qpData1=response).catch(response=>console.log(response.errorMessage))
    
  }

  show(data){
          this.showdetails=!this.showdetails;
          this.uploadQpForm=false;
          this.qpData2=data;
        }

 // Show Update Form
  showUploadForm(data){
    this.showdetails=false;
    this.uploadQpForm=true;
    this.qpData3=this.qpData1
    this.qppId=data;
    this.updateForm.controls.qpId.setValue(this.qppId);
    
  }      
        download_qp(data){
          console.log(data);
          // this.errorMessage=null;
          // this.successMessage=null;
          this.servee.download_qp(data).then(response=>{this.qpData=response})
          .catch(response=>console.log(response.errorMessage))
          
      
        }
        
        // upload the edited qp
        updateQp(){
          // console.log(this.createNewQp.value);
          this.updateForm.controls.qpId.setValue(this.qppId);
          this.errorMessage1=null;
          this.successMessage1=null;
          this.servee.updateExistingQp(this.updateForm.value).then(response=>{this.qp=response,this.successMessage1=response.message})
          .catch(response=>this.errorMessage1=response.message)
      
        }
        setRemarks(){
          this.errorMessage=null;
          this.successMessage=null;
          this.servee.updateRemarks(this.remarks.value).then(response=>{this.qp=response,this.successMessage=response.message})
          .catch(response=>this.errorMessage=response.message)
        }
        readyToRollOutStatus(data){
          this.errorMessage2=null;      
          this.successMessage2=null;
          this.servee.readyToRollOutStatus(data).then(response=>{this.changeStatus=response,this.successMessage2="Successfully sent to ETA",console.log(response),this.ngOnInit()})
          .catch(response=>this.errorMessage2=response.message)
          
        }
}
