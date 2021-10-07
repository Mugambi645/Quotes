import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote: Quote[] = [
    {name: "Dance", quote: "Lets dance together",quoteAuthor: "ian"},
    {name: "Sing", quote: "Lets sing together", quoteAuthor: "john"}

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
