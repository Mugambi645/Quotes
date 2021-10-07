import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote: Quote[] = [
    new Quote("Dance", "Dance poetry", "Lets dance together", "ian"),
    new Quote("Sing", "song poetry", "Lets sing together", "john")

  ]
  //hide and reveal info
  toggleDetails(index: any) {
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }
  //function to delete quote
  deleteQuote(isComplete:any, index:any) {
    if (isComplete) {
      let DeleteTheQuote = confirm(`Are you sure you want to delete ${this.quote[index].genre}?`);
      if (DeleteTheQuote) {
        this.quote.splice(index, 1);
      } else {
        alert(`Deletion of ${this.quote[index].genre} aborted`);
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
