import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ReportData } from '../Models/report-data';

@Injectable({
  providedIn: 'root'
})
export class ReporttextService {
  collectionName = 'Report';

  constructor(
    private firestore: AngularFirestore
  ) { }

  create_report(booking: ReportData) {
    return this.firestore.collection(this.collectionName).add(booking);
  }

  read_reports() {
    const report = [];
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  update_report(bookingID: any, booking: any): Promise<void> {
    return this.firestore.doc(this.collectionName + '/' + bookingID).update(booking)

    // this.firestore.doc(this.collectionName + '/' + bookingID).update(booking)
  }
  updateReport(id: any , booking: ReportData){
    this.firestore.collection('Report').doc(id).update(booking);
  }

  delete_report(booking_id: any) {
    this.firestore.doc(this.collectionName + '/' + booking_id).delete();
  }
}
