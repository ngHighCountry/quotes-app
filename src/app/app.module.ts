import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuoteListComponent } from './components/quote-list/quote-list.component';
import { QuoteComponent } from './components/quote/quote.component';
import { QuotesService } from './services';

@NgModule({
  declarations: [AppComponent, QuoteListComponent, QuoteComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [QuotesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
