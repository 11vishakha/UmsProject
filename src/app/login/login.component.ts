import { Component } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms'
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginservice:LoginService){}

  loginForm= new FormGroup({

    email:new FormControl(
      '',{validators:Validators.required,updateOn:'blur'}
    ),
    pwd:new FormControl(
      '',{validators:Validators.required,updateOn:'blur'}

    )

  })

  PostAllLogin(){
    this.loginservice.postdata(this.loginForm.value).subscribe((res)=>alert(res))
  }


}
