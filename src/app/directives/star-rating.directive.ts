import { Directive, ElementRef, Renderer2, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appStarRating]'
})
export class StarRatingDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.addClass(this.elementRef.nativeElement, 'glyphicon-star-empty');
  }

  @HostListener('mouseenter') fullStar(eventData: Event) {
    this.renderer.removeClass(this.elementRef.nativeElement, 'glyphicon-star-empty');
    this.renderer.addClass(this.elementRef.nativeElement, 'glyphicon-star');
  }

  @HostListener('mouseleave') emptyStar(eventData: Event) {
    this.renderer.removeClass(this.elementRef.nativeElement, 'glyphicon-star');
    this.renderer.addClass(this.elementRef.nativeElement, 'glyphicon-star-empty');
  }
}
