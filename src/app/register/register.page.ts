import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { RegisterService } from '../Services/register.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { RegisterData } from '../Models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerData!: RegisterData;
  registerForm!: FormGroup;
  isSubmitted = false;

  validations={
    username:[{type:'required', message:'Please enter username'}],
    email:[{type:'required', message:'Please enter valid email address'},
           {type:'pattern', message:'Please enter valid email address'}],
    contact:[{type:'required', message:'Please enter phone number'}],
    password:[{type:'required', message:'Password length must be 8 characters long'},
              {type:'minlength', message:'Password length must be 8 characters long'}]
  }

  constructor(public formBuilder: FormBuilder, 
    public auth: AngularFireAuth, 
    private registerService: RegisterService) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      UserName: new FormControl ('', [Validators.required]),
      Email: new FormControl ('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      Phone: new FormControl ('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      Password: new FormControl ('', [Validators.required, Validators.minLength(8)]),
      role: "community",      
    })
  }


  get errorControl() {
    return this.registerForm.controls;
  }

  createRegistry(){
    console.log(this.registerForm.value);
    this.registerService.create_register(this.registerForm?.value).then(resp => {
      this.registerForm?.reset();
    })
    .catch(error => {
      console.log(error.message);
    });
  }
  
   register(email: any, password: any){
    this.auth.createUserWithEmailAndPassword(email,password)
    .then((res)=>{
      console.log(res);
      this.createRegistry();
    })
    .catch((err)=>{
      console.log(err);
    })
  }

}
