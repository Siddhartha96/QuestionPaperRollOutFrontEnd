import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { Login } from './login/login';
import 'rxjs/add/operator/toPromise';
import { QPDetails } from './qpeditor/QPDetails';
import { BehaviorSubject } from 'rxjs';
import { BatchDetails } from './eta/batchDetails';
import { Requests } from './eta/Requests';

@Injectable()
export class AllService {
  navShow:boolean=true;
  private isUserLoggedIn:boolean;
  constructor(private http:Http) { 
    if(localStorage.getItem('username')!=null)
    {
      this.navShow=false;
    }
    this.isUserLoggedIn=false;

  }
  setUserLoggedIn(){
    this.isUserLoggedIn=true;
  }
  getUserLoggedIn(){
    return this.isUserLoggedIn
  }

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

//  Authentication after login details entered
  authenticate(data):Promise<Login>{
    return this.http.post("http://localhost:3333/SeaQueenBoats/QPTracker/checkLogin",data)
    .toPromise()
    .then(response=>response.json() as Login)
    .catch(error =>Promise.reject(error.json() as Login))
  }
  
  create_new_qp(data):Promise<QPDetails>{
    return this.http.post("http://localhost:3333/SeaQueenBoats/QPTracker/createqp",data)
    .toPromise()
    .then(response=>response.json() as QPDetails)
    .catch(error =>Promise.reject(error.json()))

  }
    
  download_qp(data):Promise<QPDetails>{
    return this.http.get("http://localhost:3333/SeaQueenBoats/QPTracker/download/"+data)
    .toPromise()
    .then(response=>response.json() as QPDetails)
    .catch(error =>Promise.reject(error.json()))

  }
  getAllQp():Promise<QPDetails[]>{
    return this.http.get("http://localhost:3333/SeaQueenBoats/QPTracker/getAllQp")
    .toPromise()
    .then(response=>response.json() as QPDetails[])
    .catch(error =>Promise.reject(error.json()))

  }

  updateExistingQp(data):Promise<QPDetails>{
    return this.http.post("http://localhost:3333/SeaQueenBoats/QPTracker/updateqp",data)
    .toPromise()
    .then(response=>response.json() as QPDetails)
    .catch(error =>Promise.reject(error.json()))

  }

  updateRemarks(data):Promise<QPDetails>
  {
    return this.http.post("http://localhost:3333/SeaQueenBoats/QPTracker/remarks",data)
    .toPromise()
    .then(response=>response.json() as QPDetails)
    .catch(error =>Promise.reject(error.json()))
  }
  reviewfiles(data):Promise<QPDetails[]>{
    return this.http.get("http://localhost:3333/SeaQueenBoats/QPTracker/reviewFiles/"+data)
    .toPromise()
    .then(response=>response.json() as QPDetails[])
    .catch(error =>Promise.reject(error.json()))
  }

  search(data):Promise<QPDetails[]>{
    return this.http.get("http://localhost:3333/SeaQueenBoats/QPTracker/getFiles/"+data)
    .toPromise()
    .then(response=>response.json() as QPDetails[])
    .catch(error =>Promise.reject(error.json()))
  }
  displayReviewerName():Promise<String[]>{
    return this.http.get("http://localhost:3333/SeaQueenBoats/QPTracker/displayReviewerName")
    .toPromise()
    .then(response=>response.json() as String[])
    .catch(error =>Promise.reject(error.json()))
  }
  readyToRollOutStatus(data):Promise<String>{
    return this.http.get("http://localhost:3333/SeaQueenBoats/QPTracker/changestatus/"+data)
    .toPromise()
    .then(response=>response.toString())
    .catch(error =>Promise.reject(error))
  }

  qpRollOut(data):Promise<string>{
    console.log(data)
    return this.http.post("http://localhost:3333/SeaQueenBoats/QPTracker/setRolledout",data)
    .toPromise()
    .then(response=>response.json() as string)
    // .catch(error =>

  }
  showBatch():Promise<BatchDetails[]>{
    return this.http.get("http://localhost:3333/SeaQueenBoats/QPTracker/batchDetails")
    .toPromise()
    .then(response=>response.json() as BatchDetails[])
    .catch(error =>Promise.reject(error.json()))

  }
  showQp(data):Promise<QPDetails[]>{
    return this.http.post("http://localhost:3333/SeaQueenBoats/QPTracker/etaFiles",data).
    toPromise().
    then(response=>response.json() as QPDetails[]).
    catch(error =>Promise.reject(error.json()))
  }

  createREquest(data):Promise<Requests>{
    return this.http.post("http://localhost:3333/SeaQueenBoats/QPTracker/createrequest",data).
    toPromise().
    then(response=>response.json() as Requests).
    catch(error =>Promise.reject(error.json()))
  }
  displayCreatorName():Promise<String[]>{
    return this.http.get("http://localhost:3333/SeaQueenBoats/QPTracker/displayCreatorName")
    .toPromise()
    .then(response=>response.json() as String[])
    .catch(error =>Promise.reject(error.json()))
  }
  getREquest(data):Promise<Requests[]>{
    return this.http.post("http://localhost:3333/SeaQueenBoats/QPTracker/getrequest",data).
    toPromise().
    then(response=>response.json() as Requests[]).
    catch(error =>Promise.reject(error.json()))
  }

  getAllEtaFiles():Promise<QPDetails[]>{
    return this.http.get("http://localhost:3333/SeaQueenBoats/QPTracker/getAlletaFiles")
    .toPromise()
    .then(response=>response.json() as QPDetails[])
    .catch(error =>Promise.reject(error.json()))

  }
}
