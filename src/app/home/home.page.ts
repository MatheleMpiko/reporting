import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { ReportingService } from '../Services/reporting.service';
import Report from '../Models/report';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string = '';
  password: string = '';

  login() {
    // Add your login logic here
    console.log('Logging in with username:', this.username);
  }

  constructor() {}
}
