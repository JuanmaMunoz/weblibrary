import {
  style,
  trigger,
  state,
  transition,
  animate,
} from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAccordion } from '../../../models/interfaces';
import { collapseAnimation } from '../../../utils/effects/effects';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  animations: [collapseAnimation],
})
export class AccordionItemComponent implements OnInit {
  @Input() accordionItem: IAccordion = {} as IAccordion;
  @Output() accordionItemEvent: EventEmitter<IAccordion> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  public showHide(): void {
    this.accordionItem.open = !this.accordionItem.open;
    this.accordionItemEvent.emit(this.accordionItem);
  }
}
