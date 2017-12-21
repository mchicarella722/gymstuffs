import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: String;
  username: String;
  password: String;
  confPass: String;
  
  constructor(private validateService: ValidateService, private flashMessages: FlashMessagesService) { }

  ngOnInit() {
  }
  onRegisterSubmit(){
    console.log("Registered "+ this.username);
    const user = {
      username: this.username,
      email: this.email,
      password: this.password,   
      confPass: this.confPass  
  }
  if(!this.validateService.validateRegister(user)){
    this.flashMessages.show("Passwords Don't Match",{cssClass: 'alert-danger',timeout:3000});
    return false;
  }
}
}
