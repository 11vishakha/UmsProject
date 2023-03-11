import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  baseurl='http://15.206.171.20:9090'

  postdata(body:any)
  {
    return this.http.post(`${this.baseurl}/login`,body,{responseType:'text'})
  }
}
