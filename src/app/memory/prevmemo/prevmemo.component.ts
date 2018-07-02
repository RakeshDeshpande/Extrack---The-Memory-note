import { datastorageService } from './../../auth/datastorage.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-prevmemo',
  templateUrl: './prevmemo.component.html',
  styleUrls: ['./prevmemo.component.css']
})
export class PrevmemoComponent implements OnInit {
  memories = [{
    occasion:'Thanks Giving',
    Description:'It was really fun but Chandler hates Thanks Giving',
    image: 'XYZ'
      }];
    
  constructor(private dataservice:datastorageService) { }

  ngOnInit() {
  }

  onget(){

    this.dataservice.getMemories().subscribe(

      (memory:any[])=>this.memories=memory,
      (error)=>console.log(error)

    );

  }

}
