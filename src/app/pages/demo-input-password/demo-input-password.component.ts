import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IItem } from 'src/app/models/interfaces';

@Component({
  selector: 'app-demo-input-password',
  templateUrl: './demo-input-password.component.html',
  styleUrls: ['./demo-input-password.component.scss'],
})
export class DemoInputPasswordComponent {
  public title = 'Input-password';
  public description =
    'Input-password is a component with which we can establish validations for the different "input-password" elements we have in our application. It will go inside a FormGroup where we will establish its logic. Its main @Inputs will be a FormControl, which will contain its logic, and an object for the respective texts when the validations are not met. It contains a button to show and hide the password.';
  public inputList: IItem[] = [
    {
      name: 'control',
      type: 'FormControl',
      description: 'FormControl where the validation logic of our component resides.',
    },
    {
      name: 'label',
      type: 'string',
      description: 'Label of the input-password.',
    },
    {
      name: 'validationErrors',
      type: '{typeValidation (required, minLength etc ...): codeTraduction(string)}',
      description: 'Object that contains the code and translation key of the respective validation errors.',
    },
    {
      name: 'focus',
      type: 'boolean',
      description: 'Parameter to set the focus on the input-password.',
    },
  ];

  public password: string = 'anyPass';
  public label: string = 'Password';
  public formUser = new FormGroup({
    password: new FormControl(this.password, [Validators.required, Validators.minLength(6)]),
  });
  public passControl: FormControl = this.formUser.get('password') as FormControl;
  public errorDescription = {
    required: 'validations.password.required',
    minlength: 'validations.password.minlength',
  };

  public html = `
  <lib-input-password [label]="label" [validationErrors]="errorDescription" [control]="passControl" [focus]="true"></lib-input-password>`;

  public typeScript = `
  public password: string = 'anyPass';
  public label: string = 'Password';
  public formUser = new FormGroup({
    password: new FormControl(this.password, [Validators.required, Validators.minLength(6)]),
  });
  public passControl: FormControl = this.formUser.get('password') as FormControl;
  public errorDescription = {
    required: 'validations.password.required',
    minlength: 'validations.password.minlength',
  };`;
}
