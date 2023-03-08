import { FormControl } from '@angular/forms';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ISelect } from '../../models/interfaces';

@Component({
  selector: 'lib-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() control: FormControl = new FormControl();
  @Input() values: ISelect[] = [];
  @Input() focus: boolean = false;
  @ViewChild('select') select: ElementRef = {} as ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.focus) this.select.nativeElement.focus();
  }
}
