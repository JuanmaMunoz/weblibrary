import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IItem } from 'src/app/models/interfaces';

@Component({
  selector: 'app-demo-input',
  templateUrl: './demo-input.component.html',
  styleUrls: ['./demo-input.component.scss'],
})
export class DemoInputComponent {
  public title = 'Input-text';
  public description =
    'Input-text is a component with which we can establish validations for the different "input-text" elements we have in our application. It will go inside a FormGroup where we will establish its logic. Its main @Inputs will be a FormControl, which will contain its logic, and an object for the respective texts when the validations are not met.';
  public inputList: IItem[] = [
    {
      name: 'control',
      type: 'FormControl',
      description: 'FormControl where the validation logic of our component resides.',
    },
    {
      name: 'label',
      type: 'string',
      description: 'Label of the input-text.',
    },
    {
      name: 'validationErrors',
      type: '{typeValidation (required, minLength etc ...): codeTraduction(string)}',
      description: 'Object that contains the code and translation key of the respective validation errors.',
    },
    {
      name: 'focus',
      type: 'boolean',
      description: 'Parameter to set the focus on the input-text.',
    },
  ];

  public email: string = 'test@vintegris.com';
  public label: string = 'Email';
  public formUser = new FormGroup({
    email: new FormControl(this.email, [Validators.required, Validators.email]),
  });
  public emailControl: FormControl = this.formUser.get('email') as FormControl;
  public errorDescription = {
    required: 'validations.email.required',
    email: 'validations.email.invalid',
  };

  public html = `
  <lib-input-text [label]="label" [validationErrors]="errorDescription" [control]="emailControl" [focus]="false"></lib-input-text>`;

  public typeScript = `
  public email: string = 'test@vintegris.com';
  public label: string = 'Email';
  public formUser = new FormGroup({
    email: new FormControl(this.email, [Validators.required, Validators.email]),
  });
  public emailControl: FormControl = this.formUser.get('email') as FormControl;
  public errorDescription = {
    required: 'validations.email.required',
    email: 'validations.email.invalid',
  };`;
}
