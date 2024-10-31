import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor( private login:LoginService){}
  ngOnInit(): void {}
  logIn(data:object):void{
    this.login.userLogin(data).subscribe((result)=>{
      console.warn(result)
      
    });
  }

  
}
