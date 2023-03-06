import { FormControl } from '@angular/forms';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { showHideStatus } from '../../utils/effects/effects';
import { IBoxItem, ISelectMultiple } from '../../models/interfaces';

@Component({
  selector: 'lib-select-multiple',
  templateUrl: './select-multiple.component.html',
  styleUrls: ['./select-multiple.component.scss'],
  animations: [showHideStatus],
})
export class SelectMultipleComponent implements OnInit, AfterViewInit {
  @Input() control: FormControl = new FormControl();
  @Input() label: string = '';
  @Input() values: ISelectMultiple[] = [];
  @Input() focus: boolean = false;
  @Output() actionSelect: EventEmitter<ISelectMultiple[]> = new EventEmitter();
  @ViewChild('select') select: ElementRef = {} as ElementRef;
  @ViewChild('dropdownDiv') dropdownDiv: ElementRef = {} as ElementRef;
  @ViewChild('formcheck') formcheck: ElementRef = {} as ElementRef;
  public open: boolean = false;
  public boxItems: IBoxItem[] = [];
  constructor() {}

  ngOnInit(): void {
    this.createBoxItem();
  }

  ngAfterViewInit(): void {
    if (this.focus) this.select.nativeElement.focus();
    window.addEventListener('mouseup', (event: any) => {
      console.log(event.target);
      if (
        event.target != this.select.nativeElement &&
        !this.select.nativeElement.contains(event.target) &&
        event.target != this.dropdownDiv.nativeElement &&
        !this.dropdownDiv.nativeElement.contains(event.target)
      ) {
        this.open = false;
      }
    });
  }

  showHide(): void {
    this.open = !this.open;
  }

  checkValue(item: ISelectMultiple): void {
    this.values.forEach((e: ISelectMultiple) => {
      e.value === item.value ? (e.checked = !e.checked) : null;
    });
    console.log(this.values);
    this.createBoxItem();
    this.actionSelect.emit(this.values);
  }

  createBoxItem() {
    this.boxItems = [];
    this.values.forEach((e: ISelectMultiple) => {
      if (e.checked) this.boxItems.push({ value: e.value, text: e.text });
    });
  }

  closeItem($event: IBoxItem): void {
    const itemValue = this.values.filter(
      (e: ISelectMultiple) => e.value === $event.value
    )[0];
    this.checkValue(itemValue);
    this.open = true;
  }
}
