import { Component, OnInit, Output } from '@angular/core';

import { Quote } from '../../models';
import { QuotesService } from '../../services';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  quotes: Quote[];
  @Output()
  deleteQuote;
  constructor(private quoteService: QuotesService) {}

  ngOnInit() {
    this.quoteService.getQuotes().subscribe(quotes => (this.quotes = quotes));
  }

  deleteQuoteById(id: number) {
    const index = this.quotes.findIndex(quote => quote.ID === id);

    if (index !== -1) {
      this.quotes.splice(index, 1);
    }
  }
}
