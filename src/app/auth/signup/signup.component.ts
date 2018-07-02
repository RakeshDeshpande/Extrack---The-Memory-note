import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { authService } from '../auth.service';
import { datastorageService } from '../datastorage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authservice:authService,private dataservice:datastorageService) { }

  ngOnInit() {
  }
  OnSignup(form:NgForm){
    
    const email=form.value.email;
    const reemail=form.value.reemail;
    const password=form.value.password;
    const repassword=form.value.repassword;
    const name:string=form.value.name;
    if(email == reemail && password == repassword )
    {
      this.authservice.signup(email,password);  
      alert("Signup Successful!"); 
      form.reset();
    }else{
      alert(name+' '+"Please check if your e-mail IDs/ Passwords match!");
      form.reset();
    }
    
  }

}
