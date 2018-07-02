import { datastorageService } from './../auth/datastorage.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http/src/static_response';
import { NgForm } from '@angular/forms';
import { Memories } from './memory.model';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.css']
})
export class EditpageComponent implements OnInit {

  occation:string;
  desc:string;
  img:string;

  memories = [{
occasion:'Thanks Giving',
Description:'It was really fun but Chandler hates Thanks Giving',
image: 'XYZ'
  }];

  constructor(private datastoreservice: datastorageService) { }

  ngOnInit() {
  }

  onSave(form:NgForm){

    this.occation =form.value.account;
    this.desc=form.value.description;
    this.img=form.value.pic;

    if( this.occation && this.desc && this.img != ' ' )
{
    this.datastoreservice.storageMemory(this.memories).subscribe(
      (response:Response)=>console.log(response),
      (error)=>console.log(error)
      
    ); 
    form.reset();
  } else{

    alert("Please enter the missing fields");
    form.reset();
  }
  }

  onclear(f:NgForm){

    f.reset();
  }

}
