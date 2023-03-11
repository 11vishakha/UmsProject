import { Component } from '@angular/core';
import { FormControl , FormGroup , Validators} from '@angular/forms'
import { ForgotPasswordService } from 'src/app/services/forgot-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  forgetform=new FormGroup({
    emailId:new FormControl(
      '',{validators:Validators.required,updateOn:'blur'}
    )
  })

  
  constructor(private forgetservice:ForgotPasswordService){}

  emailany:any



  forgetpass(id:number)
  {
    this.forgetservice.forgetemail(id).subscribe((res)=>alert(res))
  }

}
