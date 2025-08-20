import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  HostListener,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-drawer',
  imports: [],
  templateUrl: './drawer.html',
  styleUrl: './drawer.css',
  standalone: true
})
export class Drawer {
  @Input() open = false;
  @Output() closed = new EventEmitter<void>();
  private startY = 0;
  private currentY = 0;
  private startTime = 0;
  private dragging = false;
  private threshold = 100; // Threshold for drag distance [px]
  private velocityThreshold = 0.5; // Threshold for velocity [px/s]
  public el = inject(ElementRef);
  // constructor(private el: ElementRef) {}
  close() {
    this.closed.emit();
  }

  startDrag(event: MouseEvent | TouchEvent) {
    if (!this.open) return;
    this.dragging = true;
    this.startY = this.getY(event);
    this.currentY = this.startY;
    this.startTime = Date.now();

    const sheetEl = this.el.nativeElement.querySelector(
      '.sheet',
    ) as HTMLElement;
    sheetEl.style.transition = 'none'; // Disable transition during drag
  }

  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:touchmove', ['$event'])
  onDrag(event: MouseEvent | TouchEvent) {
    if (!this.dragging) return;
    this.currentY = this.getY(event);
    const diff = this.currentY - this.startY;
    if (diff > 0) {
      this.setTranslate(diff);
    }
  }
  @HostListener('document:mouseup')
  @HostListener('document:touchend')
  endDrag() {
    if (!this.dragging) return;
    this.dragging = false;
    const sheetEl = this.el.nativeElement.querySelector(
      '.sheet',
    ) as HTMLElement;
    sheetEl.style.transition = ''; // Re-enable transition after drag
    //zamknij jeśli:
    // - przeciągnięto dalej niż threshold
    // - lub prędkość przeciągania była większa niż velocityThreshold
    const diff = this.currentY - this.startY;
    const elapsed = Date.now() - this.startTime;
    const velocity = diff / elapsed; // px/ms

    if (diff > this.threshold || velocity > this.velocityThreshold) {
      this.close();
    } else {
      this.setTranslate(0); // Reset position if not closed
    }
  }

  private getY(event: MouseEvent | TouchEvent): number {
    return event instanceof MouseEvent
      ? event.clientY
      : event.touches[0].clientY;
  }
  private setTranslate(y: number) {
    const sheetEl = this.el.nativeElement.querySelector(
      '.sheet',
    ) as HTMLElement;
    sheetEl.style.transform = `translateY(${y}px)`;
  }
}
