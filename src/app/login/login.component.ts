import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../services/loginservice.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginserviceService
    , private route: Router) { }

  ngOnInit() {
  }
  login(value) {
    debugger;
    this.loginService.loginPost(value).pipe(first()).subscribe(responseData => {
      console.log(responseData);
      if (null === responseData)
        this.route.navigate(['']);
      else if (responseData.userType === "STUDENT")
        this.route.navigate(['/studentdashboard'])
      else if (responseData.userType === "PARENT")
        this.route.navigate(['/parentdashboard'])
      else if (responseData.userType === "TEACHER")
        this.route.navigate(['/teacherdashboard'])
      else if (responseData.userType === "ADMIN")
        this.route.navigate(['/admindashboard'])
    })
  }

}
