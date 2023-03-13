import { Component } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms'
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {



  Registration = new FormGroup({
 
    cityId: new FormControl(),
    countryId :new FormControl() ,
    dob : new FormControl(
      '',{validators:Validators.required,updateOn:'blur'}

    ),
    email :new FormControl(
      '',{validators:Validators.required,updateOn:'blur'}

    ),
    fname : new FormControl(
      '',{validators:Validators.required,updateOn:'blur'}
    ),
    gender : new FormControl(),
    lname : new FormControl(
      '',{validators:Validators.required,updateOn:'blur'}

    ),
    phno : new FormControl(   
         '',{validators:Validators.required,updateOn:'blur'}
    ),
    stateId : new FormControl()
    })

    newCountry:any
    newState:any
    newCity:any

    constructor(private registerservice:RegisterService){

      this.countrydata()
    

    }


    savedata()
    {
      this.registerservice.saveregister(this.Registration.value).subscribe((res)=>alert( res))
    }

    countrydata()
    {
      this.registerservice.getallcountries().subscribe((res)=>console.log(this.newCountry = res))
    }

    statedata(countryId:number)
    {
      this.registerservice.getstate(countryId).subscribe((res)=>console.log(this.newState= res))
    }

    citydata(stateId:any)
    {
      this.registerservice.getcity(stateId).subscribe((res)=>console.log(this.newCity= res))
    }

    emaildata(email:any)
    {
       this.registerservice.getemail(email).subscribe((res)=>console.log(res))
    }
    


}
