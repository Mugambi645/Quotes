import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote: Quote[] = [
    new Quote("Science", "Purpose of science", "Science is the great antidote to the poison of enthusiasm and superstition", "ian", "Adam Smith", 0, 0, new Date(2020, 10, 4)),
    new Quote("Science", "Discovery", "No great discovery was ever made without a bold guess.", "john", "Sir Isaac Newton", 0, 0, new Date(2019,5,10)),
    new Quote("Dreams", "Dreams", "Dreams are often most profound when they seem the most crazy", "Tina", "Sigmund freud", 0, 0, new Date(2020, 10,4)),
    new Quote("Life", "Value of life", "A man who dares waste one hour of time has not discovered the value of life", "Charles", "Charles Darwin", 0, 0, new Date(2021, 5, 7)),
    new Quote("Love", "Nature", "The love of all living creatures is the most notable attribute of man", "Mitchelle", "Charles Darwin", 0, 0, new Date(2021, 20, 8)),
    new Quote("Mindset", "Freedom of mind", "Although i cannot move and i have to speak through a computer, in my mind i am free", "David", "Stephen Hawking", 0, 0, new Date(2018, 5,7))

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
  //add quote
  addNewQuote(quote: any) {
    let quoteSize = this.quote.length;
    quote.id = quoteSize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
