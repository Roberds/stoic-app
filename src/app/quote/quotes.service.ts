import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private angularFirestore: AngularFirestore) {}

  getAllQuotes() {
    return this.angularFirestore.collection('/Quotes').snapshotChanges;
  }
}

