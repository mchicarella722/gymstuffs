
import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessages: FlashMessagesService
  ){}

  ngOnInit(){
    
  }

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }
    this.authService.authenticateUser(user).subscribe(data=> {
      if(data.success){
        this.flashMessages.show("Success",{cssClass: 'alert-success'});
        this.router.navigateByUrl('/home');
        return true;
      }else{
        this.flashMessages.show("Wrong username or Password",{cssClass: 'alert-danger'});
        this.router.navigateByUrl('/login');
        return true; 
    });
  }
}
