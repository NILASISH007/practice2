import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlights]',
})
export class HighlightsDirective {
  @Input() appHighlights='green'
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.applyColor(this.appHighlights);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.applyColor('');
  }

 private applyColor(color:any)
  {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
