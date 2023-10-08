import { Component } from '@angular/core';import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  registerForm!: FormGroup;
  userRole!:any;

  constructor(public formBuilder: FormBuilder,
     public auth: AngularFireAuth,
     public firestore: AngularFirestore,
      public router: Router) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    })
  }

  login(email: any, password: any){
    this.auth.signInWithEmailAndPassword(email, password)
    .then((res)=>{
      if(res.user){
      console.log(res.user);
      }

      this.firestore.collection('Registeration').ref.where('Email', '==', res.user.email)
      .onSnapshot((data) => {
        data.forEach((info) => {
         this.userRole = info.data();
          const role = this.userRole.role;
          if(role == 'admin'){
            this.router.navigate(['admin-dashoard']);
          }
          else{
            this.router.navigate(['user-dashboard']);
          }
        })
      })
    })
    .catch((err)=>{
      console.log(err.message);
      window.alert(err.message);
    })
  }
}
