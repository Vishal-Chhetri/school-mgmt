import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from './loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginserviceService) { }

  ngOnInit() {
  }
  login(value){
    //console.log(value.username)
    //console.log(value.password)
    this.loginService.loginService(value.username,value.password);
  }

}
