import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { HighestVoteDirective } from './highest-vote.directive';
import { FormsModule } from '@angular/forms';
import { DateCountPipe } from './date-count.pipe';
import { DatePassedPipe } from './date-passed.pipe';
@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteFormComponent,
    QuoteDetailComponent,
    HighestVoteDirective,
    DateCountPipe,
    DatePassedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
