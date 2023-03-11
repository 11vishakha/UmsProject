import { Component } from '@angular/core';
import { FormControl,FormGroup , Validators } from '@angular/forms'
import { UmlockAccService } from '../services/umlock-acc.service';



@Component({
  selector: 'app-unlock-account',
  templateUrl: './unlock-account.component.html',
  styleUrls: ['./unlock-account.component.css']
})
export class UnlockAccountComponent {
  constructor (private unlockservice:UmlockAccService){ }

  
  unlockAccForm=new FormGroup({

    email:new FormControl(
      '',{validators:Validators.required,updateOn:'blur'}
    ),
    tempPwd: new FormControl(
      '',{validators:Validators.required,updateOn:'blur'}

    ),
    newPwd: new FormControl(
      '',{validators:Validators.required,updateOn:'blur'}

    ),
    confirmPwd:new FormControl(
      '',{validators:Validators.required,updateOn:'blur'}

    )

  })


  postdata()
  {
    this.unlockservice.postser(this.unlockAccForm.value).subscribe((res)=>console.log(res))
  }

}
