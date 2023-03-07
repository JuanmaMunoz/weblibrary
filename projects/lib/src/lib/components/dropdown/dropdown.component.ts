import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { IDropDown } from '../../models/interfaces';
import { showHideStatus } from '../../utils/effects/effects';

@Component({
  selector: 'lib-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [showHideStatus],
})
export class DropdownComponent implements AfterViewInit {
  @Input() open = false;
  @Input() dropDown: IDropDown = {} as IDropDown;
  @Output() dropDownAction: EventEmitter<string> = new EventEmitter();
  @ViewChild('dropdown') dropdown: ElementRef = {} as ElementRef;
  constructor() {}

  ngAfterViewInit(): void {
    window.addEventListener('mouseup', (event: any) => {
      if (!this.dropdown.nativeElement.contains(event.target)) {
        this.open = false;
      }
    });
  }

  public showHide(): void {
    this.open = !this.open;
  }

  public action(act: string): void {
    this.open = false;
    this.dropDownAction.emit(act);
  }
}
