import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  @Input()
  public date: Date | undefined;
  private paragraph: any; //p>

  constructor(private el: ElementRef, private renderer: Renderer2) { 

    this.paragraph = this.renderer.createElement('p');
   }

  @HostListener('mouseenter')
  mouseEnter(eventDate: Event){

    this.paragraph.innerHTML = this.date?.toLocaleString();
    this.renderer.appendChild(this.el.nativeElement, this.paragraph);
  }

  @HostListener('mouseleave')
  mouseLeave(eventDate: Event){

    this.renderer.removeChild(this.el.nativeElement, this.paragraph);
  }

}
