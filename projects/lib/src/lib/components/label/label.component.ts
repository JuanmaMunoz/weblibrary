import { Component, Input, OnInit } from '@angular/core';
import { FontSize, FontWeight, TypeColor } from '../../models/enums';
import { ILabel } from '../../models/interfaces';

@Component({
  selector: 'lib-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class LabelComponent implements OnInit {
  @Input() label: ILabel = {} as ILabel;
  ngOnInit() {
    //if (!this.label.color) this.label.color = TypeColor.Primary;
    if (!this.label.fontWeight) this.label.fontWeight = FontWeight.Normal;
    if (!this.label.fontSize) this.label.fontSize = FontSize.F6;
  }
}
