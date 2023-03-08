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
import {
  IBoxItem,
  ISelectMultiple,
  ISelectMultipleItem,
} from '../../models/interfaces';

@Component({
  selector: 'lib-select-multiple',
  templateUrl: './select-multiple.component.html',
  styleUrls: ['./select-multiple.component.scss'],
  animations: [showHideStatus],
})
export class SelectMultipleComponent implements OnInit, AfterViewInit {
  @Input() control: FormControl | null = null;
  @Input() selectMultiple: ISelectMultiple = {} as ISelectMultiple;
  @Input() validationErrors: any;
  @Output() actionSelect: EventEmitter<ISelectMultiple> = new EventEmitter();
  @ViewChild('dropdown') dropdown: ElementRef = {} as ElementRef;
  public open: boolean = false;
  public firstOpen = false;
  public boxItems: IBoxItem[] = [];
  public selectAll: ISelectMultipleItem = {
    value: 'selectAll',
    text: 'select.all',
    checked: false,
  };
  constructor() {}

  ngOnInit(): void {
    this.createBoxItem();
  }

  ngAfterViewInit(): void {
    window.addEventListener('mouseup', (event: any) => {
      if (!this.dropdown.nativeElement.contains(event.target)) {
        this.open = false;
      }
    });
  }

  showHide(): void {
    this.firstOpen = true;
    this.open = !this.open;
  }

  checkValue(item: ISelectMultipleItem): void {
    this.selectMultiple.values.forEach((e: ISelectMultipleItem) => {
      e.value === item.value ? (e.checked = !e.checked) : null;
    });
    if (!item.checked) this.selectAll.checked = false;
    this.createBoxItem();
    this.actionSelect.emit(this.selectMultiple);
  }

  createBoxItem() {
    this.boxItems = [];
    this.selectMultiple.values.forEach((e: ISelectMultipleItem) => {
      if (e.checked) this.boxItems.push({ value: e.value, text: e.text });
    });
  }

  closeItem($event: IBoxItem): void {
    const itemValue = this.selectMultiple.values.filter(
      (e: ISelectMultipleItem) => e.value === $event.value
    )[0];
    this.checkValue(itemValue);
    this.open = true;
  }

  allItems() {
    this.selectAll.checked = !this.selectAll.checked;
    this.selectMultiple.values.forEach(
      (e: ISelectMultipleItem) => (e.checked = this.selectAll.checked)
    );
    this.createBoxItem();
    this.actionSelect.emit(this.selectMultiple);
  }
}
