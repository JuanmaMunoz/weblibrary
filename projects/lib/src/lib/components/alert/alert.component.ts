import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypeAlert } from '../../models/enums';
import { showHideStatus } from '../../utils/effects/effects';

@Component({
  selector: 'lib-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [showHideStatus],
})
export class AlertComponent {
  @Input() typeAlert: TypeAlert = TypeAlert.Info;
  @Input() open: boolean = false;
  @Output() actionAlert: EventEmitter<boolean> = new EventEmitter(false);

  public close(): void {
    this.actionAlert.emit(false);
  }
}
