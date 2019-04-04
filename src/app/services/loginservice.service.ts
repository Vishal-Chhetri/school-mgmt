import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/User';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  constructor(private route: Router, private http: HttpClient) { }

  loginPost(user): Observable<User> {
    return this.http.post<User>("http://localhost:8081/user/login", user);//.pipe(map(val=>val))
  }
  getUserByID(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8081/user/getUserById?id=one");
  }

}
