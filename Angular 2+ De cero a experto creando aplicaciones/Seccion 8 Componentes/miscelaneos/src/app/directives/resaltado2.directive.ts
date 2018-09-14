import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado2]'
})
export class Resaltado2Directive {

  @Input('newColor') newColor:string;
  @Input() size:string;
  @Input('border') border:string;

  constructor(private el:ElementRef) {
    console.log("Directiva llamada appResaltado2");

    el.nativeElement.style.backgroundColor = "green";
  }

  @HostListener('mouseenter') mouseEntro() {
    this.resaltar(this.newColor || "yellow", this.size || "1rem", this.border || 'solid 10px blue');
  }

  @HostListener('mouseleave') mouseSalio() {
    this.resaltar(null, "1rem", 'none');
  }

  private resaltar(color:string, size:string, border:string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.fontSize = size;
    this.el.nativeElement.style.border = border;
  }
}
