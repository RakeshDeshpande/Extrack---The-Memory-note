import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(){
firebase.initializeApp({
  apiKey: "AIzaSyBYymUm9xLvHgoGZoyBMTgWMDihE9o1r8Y",
  authDomain: "extrack-d5674.firebaseapp.com",

});

  }

}
