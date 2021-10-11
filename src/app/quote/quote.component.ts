import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title:string = "Quote App";
  quote: Quote[] = [
    new Quote( "Science and Superstition", "Adam Smith", "Science is the great antidote to the poison of enthusiasm and superstition", "ian",  50, 10, new Date(2020, 10, 4)),
    new Quote("Discovery", "Sir Isaac Newton", "No great discovery was ever made without a bold guess.", "john",  20, 5, new Date(2019,5,10)),
    new Quote("Dreams", "Sigmund freud", "Dreams are often most profound when they seem the most crazy", "Tina",  22, 11, new Date(2020, 10,4)),
    new Quote("Value Of Life", "Charles Darwin", "A man who dares waste one hour of time has not discovered the value of life", "Charles",  13, 5, new Date(2021, 5, 7)),
    new Quote("Nature", "Charles Darwin", "The love of all living creatures is the most notable attribute of man", "Mitchelle", 40, 20, new Date(2021, 20, 8)),
    new Quote( "Freedom Of Mind", "Stephen Hawking", "Although i cannot move and i have to speak through a computer, in my mind i am free", "David",  60, 2, new Date(2018, 5,7))

  ]
  get quotesSort() {
    return this.quote.sort((x, y) => {
      return <any>new Date(y.dateCreated) - <any>new Date(x.dateCreated);
    })
  }
  //hide and reveal info
  toggleDetails(index: any) {
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }
  //function to delete quote
  deleteQuote(isComplete:any, index:any) {
    if (isComplete) {
      let DeleteTheQuote = confirm(`Are you sure you want to delete ${this.quote[index].quote}?`);
      if (DeleteTheQuote) {
        this.quote.splice(index, 1);
      } else {
        alert(`Deletion of ${this.quote[index].quote} aborted`);
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
