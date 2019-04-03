import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../services/loginservice.service';

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
    this.loginService.loginService(value.username,value.password);
  }

}
