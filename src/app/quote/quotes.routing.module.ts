import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListQuoteComponent } from './pages/list-quote/list-quote.component';
import { FormQuoteComponent } from './form-quote/form-quote.component';


const routes: Routes = [
    {
      path: '',
      component: LayoutPageComponent,
      children: [
        { path: 'form', component: FormQuoteComponent },
        { path: 'list', component: ListQuoteComponent },
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })


export class QuoteRoutingModule { }