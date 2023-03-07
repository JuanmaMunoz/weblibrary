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
  @Output() actionSelect: EventEmitter<ISelectMultiple[]> = new EventEmitter();
  @ViewChild('dropdown') dropdown: ElementRef = {} as ElementRef;
  public open: boolean = false;
  public boxItems: IBoxItem[] = [];
  public selectAll: ISelectMultiple = {
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
    this.open = !this.open;
  }

  checkValue(item: ISelectMultiple): void {
    this.values.forEach((e: ISelectMultiple) => {
      e.value === item.value ? (e.checked = !e.checked) : null;
    });
    if (!item.checked) this.selectAll.checked = false;
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

  allItems() {
    this.selectAll.checked = !this.selectAll.checked;
    this.values.forEach(
      (e: ISelectMultiple) => (e.checked = this.selectAll.checked)
    );
    this.createBoxItem();
    this.actionSelect.emit(this.values);
  }
}
