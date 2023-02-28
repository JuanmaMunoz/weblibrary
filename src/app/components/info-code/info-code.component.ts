import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-code',
  templateUrl: './info-code.component.html',
  styleUrls: ['./info-code.component.scss'],
})
export class InfoCodeComponent {
  @Input() html: string = '';
  @Input() typeScript: string = '';
}
