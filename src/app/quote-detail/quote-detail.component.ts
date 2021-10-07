import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  //bind a child component to a parent
  @Input() quote: Quote;
  constructor() { }

  ngOnInit(): void {
  }

}
