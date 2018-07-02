import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';
import { error } from 'util';
import { authService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private authservice: authService) { }

  ngOnInit() {
  }

  OnSubmit(form:NgForm){

   const email=form.value.email;
   const password=form.value.password; 
this.authservice.signinuser(email,password);
alert("Login Succeeded")

  }

}
