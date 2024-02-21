import { Component } from '@angular/core';
import { QuotesService } from './quotes.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {
  public quotes: any = [];

  constructor(private quotesService: QuotesService){


   

  }

  ngOnInit(): void {
    this.quotesService.getAllQuotes()
      .pipe(
        tap((phrasalVerbs: any[]) => {
          this.quotes = phrasalVerbs.map((e: any) => {
            const data = e.payload.doc.data();
            data.id = e.payload.doc.id;
            return data;
          });
          
        })
      )
      .subscribe({
        error: err => {
          console.log('Error while fetching data:' + err);
        }
      });
  }
  





}
