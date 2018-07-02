import {Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx'
import { Response } from '@angular/http';

@Injectable()
export class datastorageService{

constructor(private http:Http){}

storageMemory(memories : any[]){

return this.http.post('https://extrack-d5674.firebaseio.com/memory.json',memories);
}

getMemories(){

    return this.http.get('https://extrack-d5674.firebaseio.com/memory.json').map(
(response:Response)=> {
    const data= response.json();
    return data;
}

    );   
}

}