import { hostViewClassName } from '@angular/compiler';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighestVote]'
})
export class HighestVoteDirective {


  constructor(private elem: ElementRef) { }

  @HostListener("click") onClicks() {
    this.textDeco("green")
  }
  @HostListener("dblclick") onDoubleClicks() {
    this.textDeco("None")
  }
  private textDeco(action: string) {
    this.elem.nativeElement.style.color = action;
  }
}
