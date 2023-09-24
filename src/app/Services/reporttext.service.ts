import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReporttextService {
  collectionName = 'Report';

  constructor(
    private firestore: AngularFirestore
  ) { }

  create_report(booking: any) {
    return this.firestore.collection(this.collectionName).add(booking);
  }

  read_reports() {
    const booking = [];
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  update_report(bookingID: any, booking: any): Promise<void> {
    return this.firestore.doc(this.collectionName + '/' + bookingID).update(booking)
    // this.firestore.doc(this.collectionName + '/' + bookingID).update(booking)
  }

  delete_report(booking_id: any) {
    this.firestore.doc(this.collectionName + '/' + booking_id).delete();
  }
}