import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import Report from '../Models/report'; // Make sure 'Report' matches your model

@Injectable({
  providedIn: 'root'
})
export class ReportingService {
  currentUser!: any;

  constructor(private ngFirestore: AngularFirestore, private router: Router) {}

  addReport(report: Report) {
    return this.ngFirestore.collection('reported-cases').add(report); // Change 'Bookings' to 'reported-cases'
  }

  getReports() {
    return this.ngFirestore.collection('reported-cases').snapshotChanges(); // Change 'Bookings' to 'reported-cases'
  }

  getReport(id: any) {
    return this.ngFirestore.collection('reported-cases').doc(id).valueChanges(); // Change 'Bookings' to 'reported-cases'
  }

  updateReport(id: string, report: Report) {
    this.ngFirestore.collection('reported-cases').doc(id).update(report); // Change 'Bookings' to 'reported-cases'
    window.alert('Report Updated');
    this.router.navigate(['/dashboard']);
  }

  adminUpdateReport(id: string, report: Report) {
    this.ngFirestore.collection('reported-cases').doc(id).update(report); // Change 'Bookings' to 'reported-cases'
    window.alert('Report Updated');
    this.router.navigate(['/tabs/tab1']);
  }

  deleteReport(id: string) {
    this.ngFirestore.doc('reported-cases/' + id).delete(); // Change 'Bookings' to 'reported-cases'
  }
}
