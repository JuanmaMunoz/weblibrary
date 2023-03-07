import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISelectMultiple } from '../../../models/interfaces';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss'],
})
export class CheckComponent {
  @Input() item: ISelectMultiple = {} as ISelectMultiple;
  @Output() actionCheck: EventEmitter<ISelectMultiple> = new EventEmitter();

  public checkValue(): void {
    this.actionCheck.emit(this.item);
  }
}
