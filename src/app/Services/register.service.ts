import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  collectionName = 'Registeration';

  constructor(
    private firestore: AngularFirestore
  ) { }

  create_register(registry: any) {
    return this.firestore.collection(this.collectionName).add(registry);
  }
  read_register() {
    const notification = [];
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }
}
