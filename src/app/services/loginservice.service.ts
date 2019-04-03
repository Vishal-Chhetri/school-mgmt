import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/User';
import { Observable} from 'rxjs';
import { UrlConstant } from '../constant/constant';
import { map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  constructor(private route: Router, private http: HttpClient) { }
  user: any;
  data: any;
  constant: UrlConstant;
  loginService(username: string, password: string) {
    this.data=undefined;
    this.user = {
      "userName": username,
      "password": password
    }
    this.loginPost(this.user).pipe(first()).subscribe(responseData => {
      console.log(responseData);
        if(null === responseData)
          this.route.navigate(['']);
        else if(responseData.userType=== "STUDENT")
          this.route.navigate(['/studentdashboard'])
         
    });
   
  }
  loginPost(user): Observable<User> {
    return this.http.post<User>("http://localhost:8081/user/login", user);//.pipe(map(val=>val))
  }
  //this.getUserByID().subscribe(data=>this.data=data);
  getUserByID(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8081/user/getUserById?id=one");
  }

}
