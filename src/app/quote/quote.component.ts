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


}
