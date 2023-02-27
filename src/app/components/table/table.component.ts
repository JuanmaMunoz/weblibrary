import { Component, Input } from '@angular/core';
import { IItem } from 'src/app/models/interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() itemList: IItem[] = [];
}
