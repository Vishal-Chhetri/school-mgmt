import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {User} from '../interfaces/User';
import { Observable } from 'rxjs';
import {UrlConstant} from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService{
  constructor(private route: Router, private http : HttpClient) { }
  user :any;
  data:any;
  constant :UrlConstant;  
  loginService(username:string , password:string){

    this.user={
      "userName": username,
      "password": password
    }
    
    this.loginPost(this.user).subscribe(responseData=>this.data=responseData);
   
    if(username !="" && password != ""){
      this.route.navigate(['/studentdashboard'])
    }else{
      this.route.navigate([''])
    }
  }
  loginPost(user):Observable<User[]>{
    return this.http.post<User[]>("http://localhost:8081/user/login",user);
  }

  //this.getUserByID().subscribe(data=>this.data=data);
  getUserByID(): Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8081/user/getUserById?id=one");
  }

  
}
