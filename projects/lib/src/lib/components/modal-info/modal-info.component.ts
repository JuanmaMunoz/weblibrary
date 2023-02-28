import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { moveDownUpStatus } from '../../utils/effects/effects';

@Component({
  selector: 'lib-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.scss'],
  animations: [moveDownUpStatus],
})
export class ModalInfoComponent implements OnInit {
  @Input() title: string = '';
  @Input() open: boolean = false;
  @Output() closeModal: EventEmitter<null> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  close() {
    this.open = false;
    this.closeModal.emit();
  }
}
