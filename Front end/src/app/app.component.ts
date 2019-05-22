import { Component,Input} from '@angular/core';
import { Router } from "@angular/router";

import { AllService } from './all.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
//   @Input()
//   private loggerType:string;
// assign(){this.loggerType=OptionComponent.loggingType()}
constructor(private servee:AllService,private router:Router){}
public categ=localStorage.getItem('category')
logout(){
  localStorage.clear();
  this.servee.navShow=true;
  this.router.navigate(['']);
}
}