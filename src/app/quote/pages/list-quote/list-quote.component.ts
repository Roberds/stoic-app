import { Component } from '@angular/core';
import { Quote } from '../../interface/quote.interface';
import { QuotesService } from '../../service/quotes.service';
import { tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-list-quote',
  templateUrl: './list-quote.component.html',
  styleUrls: ['./list-quote.component.css']
})
export class ListQuoteComponent {

    public quotes: Quote[] = [];
    

    constructor(private quoteService: QuotesService){}

    ngOnInit(): void {
      this.quoteService.getAllQuotes()
        .pipe(
          tap((quotes: any[]) => {
            this.quotes = quotes.map((e: any) => {
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
    

    deleteQuote(id: string) {
      this.quoteService.deleteQuotes(id);
    }
  


}
