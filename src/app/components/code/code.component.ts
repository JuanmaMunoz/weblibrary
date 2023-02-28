import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent implements AfterViewInit {
  @Input() content: string = '';
  @Input() title: string = '';
  @ViewChild('contentElement') contentElement: ElementRef = {} as ElementRef;
  public numberLines: number = 0;
  public Arr = Array;
  ngAfterViewInit(): void {
    this.contentElement.nativeElement.offsetHeight;
    this.numberLines = Math.trunc(this.contentElement.nativeElement.offsetHeight / 32);
    console.log(this.numberLines);
  }
}
