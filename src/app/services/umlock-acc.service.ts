import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UmlockAccService {

  constructor(private unlockservice:HttpClient) { }

  postser(body:any)
  {
    return this.unlockservice.post(`http://15.206.171.20:9090/unlock`,body,{responseType:'text'})
  }
}
