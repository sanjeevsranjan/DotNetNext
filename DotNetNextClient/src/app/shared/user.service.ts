import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Response } from "@angular/http";
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable()
export class UserService {
  readonly rootUrl = 'http://localhost:62054';
  constructor(private http: HttpClient) { }

  registerUser(user : User){
    const body: User = {
      FullName: user.FullName,
      Email: user.Email,
      Password: user.Password,
      PhoneNumber: user.PhoneNumber
    }
    return this.http.post(this.rootUrl + '/api/User/Register', body);
  }

  userAuthentication(user : User) {
    
    var data ='{"Username":"'+user.Email+'", "password":"'+user.Password+'"}';
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.post(this.rootUrl + '/api/token', data, { headers: reqHeader });
  }

  getUserClaims(){
    return  this.http.get(this.rootUrl+'/api/User/GetUserClaims');
   }

   getAllUsers()
   {
     return this.http.get(this.rootUrl+'/api/User/Register')
   }
}