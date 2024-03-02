import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { QuotesService } from '../service/quotes.service';

@Component({
  selector: 'app-form-quote',
  templateUrl: './form-quote.component.html',
  styleUrls: ['./form-quote.component.css']
})
export class FormQuoteComponent {

 

  modalForm = this.formBuilder.group({
    author: this.formBuilder.control(''),
    description: this.formBuilder.control(''),
    category: this.formBuilder.control(''),
  });
 

  constructor(
    private formBuilder: FormBuilder,
    private quoteService: QuotesService
  ) { }

  


  //metodo de enviar 
  saveQuote(){
    this.quoteService.addQuote(this.modalForm.value);
  }

  deleteQuote(){
    console.log("jsfjs")
  }

}
