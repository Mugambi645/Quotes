
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from "../quote";
import { Form, FormGroup, NgForm } from '@angular/forms';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  
  newQuote = new Quote("", "", "","","",0, 0, new Date());
  @Output() addQuote  = new EventEmitter<Quote>();
  submitQuote(form: NgForm){
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quote("","","","","", 0, 0, new Date());
    form.resetForm();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
