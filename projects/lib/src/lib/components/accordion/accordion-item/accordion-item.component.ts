import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAccordionItem } from '../../../models/interfaces';

import { collapseAnimation } from '../../../utils/effects/effects';

@Component({
  selector: 'lib-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  animations: [collapseAnimation],
})
export class AccordionItemComponent implements OnInit {
  @Input() accordionItem: IAccordionItem = { index: 0, open: false };
  @Output() itemAction: EventEmitter<IAccordionItem> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  public showHide(): void {
    this.accordionItem.open = !this.accordionItem.open;
    this.itemAction.emit(this.accordionItem);
  }
}
