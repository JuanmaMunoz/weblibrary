import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAccordion } from '../../models/interfaces';

@Component({
  selector: 'lib-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input() accordionItems: IAccordion[] = [];
  @Input() onlyOneOpen = false;
  @Output() accordionAction: EventEmitter<IAccordion[]> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  public itemsEvents(item: IAccordion) {
    if (this.onlyOneOpen && item.open) {
      this.accordionItems.forEach((e: IAccordion) => {
        if (e.title !== item.title) {
          e.open = false;
        }
      });
    }
    this.accordionAction.emit(this.accordionItems);
  }
}
