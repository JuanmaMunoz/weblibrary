import { Component, Input, Output } from '@angular/core';
import { IItem } from 'src/app/models/interfaces';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() inputList: IItem[] = [];
  @Output() outputList: IItem[] = [];
}
