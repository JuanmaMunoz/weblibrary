import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TypeAlert } from 'projects/lib/src/public-api';
import { IItem } from 'src/app/models/interfaces';

@Component({
  selector: 'app-demo-input-ngm',
  templateUrl: './demo-input-ngm.component.html',
  styleUrls: ['./demo-input-ngm.component.scss'],
})
export class DemoInputNGMComponent {
  public title = 'Input-text-ngm [(ngModel)]';
  public description =
    'Input-text is a component with which we can establish validations for the different "input-text" elements we have in our application. It will go inside a FormGroup where we will establish its logic. Its main @Inputs will be a FormControl, which will contain its logic, and an object for the respective texts when the validations are not met.';
  public inputList: IItem[] = [
    {
      name: 'ngmodel',
      type: 'string',
      description: 'ngModel for data-binding.',
    },
    {
      name: 'label',
      type: 'string',
      description: 'Label of the component input-text-ngm.',
    },
    {
      name: 'focus',
      type: 'boolean',
      description: 'Parameter to set the focus on the component input-text-ngm.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Parameter to disable the component input-text-ngm.',
    },
  ];

  public email: string = 'test@vintegris.com';
  public label: string = 'Email';
  public typeAlert: TypeAlert = TypeAlert.Info;

  public html = `
  <lib-input-text-ngm [disabled]="false" [label]="label" [ngmodel]="email" (changeModel)="changeModel($event)"></lib-input-text-ngm>

  <div class="mt-3">
    <lib-alert [typeAlert]="typeAlert" [open]="true">
      <h2 content>{{ email }}</h2>
    </lib-alert>
  </div>`;

  public typeScript = `
  public email: string = 'test@vintegris.com';
  public label: string = 'Email';
  public typeAlert: TypeAlert = TypeAlert.Info;

  public changeModel(model: string): void {
    this.email = model;
  }`;

  public changeModel(model: string): void {
    this.email = model;
  }
}
