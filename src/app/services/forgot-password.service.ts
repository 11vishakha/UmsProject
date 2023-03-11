import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private http:HttpClient) { }

  forgetemail(id:number)
  {
    return this.http.get(`http://15.206.171.20:9090/forgotPwd/${id}`,{responseType:'text'})
  }
  
}
