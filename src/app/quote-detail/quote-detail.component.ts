import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  //bind a child component to a parent
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  //delete a quote
  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  //vote and downvote
 vote() {
   this.quote.likes += 1;
 }
 downVote() {
   this.quote.dislikes += 1;
 }
  constructor() { }

  ngOnInit(): void {
  }

}
