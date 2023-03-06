import { FormControl } from '@angular/forms';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { IBoxItem } from '../../models/interfaces';

@Component({
  selector: 'lib-box-item',
  templateUrl: './box-item.component.html',
  styleUrls: ['./box-item.component.scss'],
})
export class BoxItemComponent {
  @Input() item: IBoxItem = {} as IBoxItem;
  @Input() type: string = '';
  @Output() closeBox: EventEmitter<IBoxItem> = new EventEmitter();

  close(): void {
    this.closeBox.emit(this.item);
  }
}
