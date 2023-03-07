import { Component } from '@angular/core';
import { TypeAlert } from 'projects/lib/src/public-api';
import { IItem } from 'src/app/models/interfaces';

@Component({
  selector: 'app-demo-alert',
  templateUrl: './demo-alert.component.html',
  styleUrls: ['./demo-alert.component.scss'],
})
export class DemoAlertComponent {
  public title = 'Alert';
  public description =
    'Alert is a component for displaying information in different color formats depending on the type of alert. It has a parameter to indicate the type of alert, another parameter to show or hide it, and through ng-content we can inject the desired HTML code.';
  public inputList: IItem[] = [
    {
      name: 'typeAlert',
      type: 'TypeAlert (Enum)',
      description: 'Parameter to set the type of alert.',
    },
    {
      name: 'open',
      type: 'boolean',
      description: 'Parameter to show or hide the alert.',
    },
  ];

  public outputList: IItem[] = [
    {
      name: 'actionAlert',
      type: 'EventEmitter<boolean>',
      description: 'Event to close the alert',
    },
  ];

  public openSuccess: boolean = false;
  public typeAlertSuccess = TypeAlert.Success;
  public textSuccess: string = 'alert.textSuccess';

  public openInfo: boolean = true;
  public typeAlertInfo = TypeAlert.Info;
  public textInfo: string = '<p>You are using the <b>alert</b> component.</p><hr><p>Good way to <b>show information</b></p>';

  public html = `
  <button class="btn btn-primary mb-3" (click)="showAlert()">Show Alert</button>

  <lib-alert [typeAlert]="typeAlertSuccess" [open]="openSuccess" [btnClose]="true" (actionAlert)="actionSuccess($event)">
    <div content>
      <h1>Success</h1>
      <hr />
      <p [innerHTML]="'alert.textSuccess' | translate"></p>
    </div>
  </lib-alert>

  <lib-alert [typeAlert]="typeAlertInfo" [open]="openInfo">
    <div content [innerHTML]="textInfo | translate"></div>
  </lib-alert>`;

  public typeScript = `
  public openSuccess: boolean = false;
  public typeAlertSuccess = TypeAlert.Success;
  public textSuccess: string = 'alert.textSuccess';

  public openInfo: boolean = true;
  public typeAlertInfo = TypeAlert.Info;
  public textInfo: string = '<p>You are using the <b>alert</b> component.</p><hr><p>Good way to <b>show information</b></p>';

  public showAlert(): void {
    this.openSuccess = true;
  }

  public actionSuccess($event: boolean): void {
    this.openSuccess = $event;
  }
`;

  public showAlert(): void {
    this.openSuccess = true;
  }

  public actionSuccess($event: boolean): void {
    this.openSuccess = $event;
  }
}
