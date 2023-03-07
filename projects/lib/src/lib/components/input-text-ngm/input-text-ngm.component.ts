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

@Component({
  selector: 'lib-input-text-ngm',
  templateUrl: './input-text-ngm.component.html',
  styleUrls: ['./input-text-ngm.component.scss'],
})
export class InputTextNGMComponent implements OnInit {
  @Input() ngmodel: string = '';
  @Input() label: string = '';
  @Input() focus: boolean = false;
  @Input() disabled: boolean = false;
  @Output() changeModel: EventEmitter<string> = new EventEmitter();
  @ViewChild('input') input: ElementRef = {} as ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.focus) this.input.nativeElement.focus();
  }

  change($event: string): void {
    this.changeModel.emit($event);
  }
}
