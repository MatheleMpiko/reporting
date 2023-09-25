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
  username: string = '';
  password: string = '';
  email: string = '';
  contact: string = '';

  validations={
    usernameame:[{type:'required', message:'Please enter username'}],
    email:[{type:'required', message:'Please enter valid email address'},
           {type:'pattern', message:'Please enter valid email address'}],
    contact:[{type:'required', message:'Please enter phone number'}],
    password:[{type:'required', message:'Password length must be 8 characters long'},
              {type:'minlength', message:'Password length must be 8 characters long'}]
  }

  login() {
    // Add your login logic here
    console.log('Logging in with username:', this.username);
  }
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
