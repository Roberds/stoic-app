import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Quote } from '../interface/quote.interface';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private angularFirestore: AngularFirestore) {}

  getAllQuotes() {
    return this.angularFirestore.collection('/Quotes').snapshotChanges();
  }

  addQuote(form: any){
    this.angularFirestore.collection('/Quotes').add(form)
    .then(() => {
      console.log('Cita añadida correctamente.');
    })
    .catch((error) => {
      console.error('Error al añadir la cita:', error);
    });
  }

  deleteQuotes(id: string) {
    this.angularFirestore.collection('/Quotes').doc(id).delete()
      .then(() => {
        console.log('Cita eliminada correctamente.');
        // Aquí puedes realizar alguna acción adicional si es necesario.
      })
      .catch((error) => {
        console.error('Error al eliminar la cita:', error);
        // Manejo de errores aquí, si es necesario.
      });
  }


}

