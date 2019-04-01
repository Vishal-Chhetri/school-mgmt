import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private route: Router) { }

  loginService(username:string , password:string){
    if(username !="" && password != ""){
      this.route.navigate(['/studentdashboard'])
    }else{
      this.route.navigate([''])
    }
  }
}
