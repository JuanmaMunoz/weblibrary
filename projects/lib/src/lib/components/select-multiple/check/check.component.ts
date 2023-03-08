import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  ISelectMultiple,
  ISelectMultipleItem,
} from '../../../models/interfaces';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss'],
})
export class CheckComponent {
  @Input() item: ISelectMultipleItem = {} as ISelectMultipleItem;
  @Output() actionCheck: EventEmitter<ISelectMultipleItem> = new EventEmitter();

  public checkValue(): void {
    this.actionCheck.emit(this.item);
  }
}
