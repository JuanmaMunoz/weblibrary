import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TypeBtn, TypeSizeBtn } from '../../models/enums';
import { IDropDown } from '../../models/interfaces';
import { showHideStatus } from '../../utils/effects/effects';

@Component({
  selector: 'lib-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [showHideStatus],
})
export class DropdownComponent implements OnInit {
  @Input() open = false;
  @Input() label: string = '';
  @Input() dropDownList: IDropDown[] = [];
  @Input() typeBtn: TypeBtn = TypeBtn.Primary;
  @Input() typeSizeBtn: TypeSizeBtn = TypeSizeBtn.Standard;
  @Output() dropDownAction: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  public showHide(): void {
    this.open = !this.open;
  }

  public action(act: string): void {
    this.open = false;
    this.dropDownAction.emit(act);
  }
}
