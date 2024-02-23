import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Quote } from './quote.interface';
import { QuoteComponent } from './quote.component';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  quotes: Quote[] = [];

  constructor(private angularFirestore: AngularFirestore) {}

  getAllQuotes() {
    return this.angularFirestore.collection('/Quotes').snapshotChanges;
  }

  addQuote(quote: Quote){
    this.quotes.push(quote);
  }

}

