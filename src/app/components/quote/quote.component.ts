import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input()
  quote;

  @Output()
  deleteQuote = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  quoteToDelete(id: number) {
    this.deleteQuote.emit(id);
  }
}
