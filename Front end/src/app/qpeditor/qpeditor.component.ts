import { Component, OnInit } from '@angular/core';
import { QPDetails } from './QPDetails';
import { AllService } from '../all.service';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-qpeditor',
  templateUrl: './qpeditor.component.html',
  styleUrls: ['./qpeditor.component.css']
})
export class QpeditorComponent implements OnInit {
  qpData3: QPDetails[];
  uploadQpForm: boolean=false;
  showdetails:boolean=false;
  qpData:QPDetails;
  qpData2:QPDetails;
  qpData1:QPDetails[];
  getAllqp:QPDetails;
  errorMessage:string;
  successMessage:string;
  qp:QPDetails;
  updateForm:FormGroup
  searchForm:FormGroup;
  searchedQp:QPDetails[];
  search1:string;
  searchCounter:boolean=false;
  
  constructor(private router:Router,private servee:AllService,private fb:FormBuilder) { 
    // if(this.servee.getUserLoggedIn()==false)
    // {
    //   this.router.navigate(['/login'])
    // }
    
  }

  ngOnInit(){
    // this.searchForm=this.fb.group({
    //   search:['']
    // })
    this.updateForm=this.fb.group({
      qpId:[''],
      // qpName:[],
      path:['']
    })
   
    this.servee.getAllQp().then(response=>this.qpData1=response).catch(response=>console.log(response.errorMessage))
    
    
  }
  search(){
    console.log(this.search1)
    this.searchCounter=true
    this.servee.search(this.search1)
    .then(response=>{this.searchedQp=response})
    .catch(response=>console.log(response.errorMessage))
  }

  show(data){
          this.showdetails=!this.showdetails;
          this.uploadQpForm=false;
          this.qpData2=data;
        }

 // Show Update Form
  showUploadForm(){
    this.showdetails=false;
    this.uploadQpForm=true;
    this.qpData3=this.qpData1
    
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
          this.errorMessage=null;
          this.successMessage=null;
          this.servee.updateExistingQp(this.updateForm.value).then(response=>{this.qp=response,this.successMessage=response.message})
          .catch(response=>this.errorMessage=response.message)
      
        }
        
          
         
}
