import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { SizeModalInfo } from '../../models/enums';
import { moveDownUpStatus } from '../../utils/effects/effects';

@Component({
  selector: 'lib-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.scss'],
  animations: [moveDownUpStatus],
})
export class ModalInfoComponent implements OnInit {
  @Input() open: boolean = false;
  @Input() size: SizeModalInfo = SizeModalInfo.Standar;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter(false);
  constructor() {}

  ngOnInit(): void {}

  close() {
    this.closeModal.emit(false);
  }
}
