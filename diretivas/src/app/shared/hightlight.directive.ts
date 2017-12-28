import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[hightlight]'
})
export class HightlightDirective {

@HostListener('mouseenter') onMouseOver(){
  
  this.backgroundColor = this.hightlightColor;
}

@HostListener('mouseleave') onMouseLeave(){
  
this.backgroundColor = this.defaultColor;
}

@HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(

    @Input() defaultColor: string = 'white';
    @Input() hightlightColor: string = 'yellow';     
  
  ) { }

}
