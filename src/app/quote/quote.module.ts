import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListQuoteComponent } from './pages/list-quote/list-quote.component';
import { QuoteRoutingModule } from './quotes.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormQuoteComponent } from './form-quote/form-quote.component';
import { MaterialModule } from './material/material/material.module';



@NgModule({
  declarations: [
    LayoutPageComponent,
    ListQuoteComponent,
    FormQuoteComponent
  ],
  imports: [
    CommonModule,
    QuoteRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ]
})
export class QuoteModule { }
