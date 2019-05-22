import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators} from '@angular/forms';
import { AllService } from '../all.service';
import { Login } from './login';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // categorylist=["Reviewer","QPEditor","ETA"];
  loginForm:FormGroup;
  login:Login;
  errorMessage:string;
  successMessage:string;
  constructor(private fd:FormBuilder,private servee:AllService,private router:Router) { }
  loginSuccess:string;
  username2:string;
  checkCategory:string; //used to assign value of category
  ngOnInit() {
    this.loginForm=this.fd.group({
      username:['',[Validators.required,Validators.maxLength(15)]],
      password:['',[Validators.required,Validators.maxLength(20)]],
      category:['',[Validators.required,Validators.maxLength(10)]]

    })
  }
  //After clicking Button redirect to backend
  newMessage() {
    this.servee.changeMessage(this.username2)
  }

  loginControl(){
    this.errorMessage=null;
    this.successMessage=null;
    this.servee.authenticate(this.loginForm.value)
   .then(response=>{this.successMessage=response.message,this.loginSuccess="success",
   localStorage.setItem('username',response.username)
   localStorage.setItem('category',response.category)
   this.servee.navShow=false
   this.servee.setUserLoggedIn()
   this.username2=this.loginForm.controls.username.value;
   this.newMessage();
  })
    .catch(response=>this.errorMessage=response.message)
    
    
  }
  routingTo(){
    this.checkCategory=this.loginForm.controls.category.value;
    if(this.checkCategory=="ETA")
      this.router.navigate(['eta'])
      if(this.checkCategory=="QPEditor")
      this.router.navigate(['choice'])
      if(this.checkCategory=="Reviewer")
      this.router.navigate(['reviewer'])
  }

}
