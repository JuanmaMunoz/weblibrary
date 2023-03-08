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
    'Input-password is a component that contains an HTML input password element to which we assign logic through a reactive form. Therefore, this component is designed to be placed inside a FormGroup and will include its corresponding FormControl as a parameter. It contains a button to show and hide the password.';
  public inputList: IItem[] = [
    {
      name: 'control',
      type: 'FormControl',
      description: 'FormControl where the validation logic of our component resides.',
    },
    {
      name: 'placeholder',
      type: 'string',
      description: 'Placeholder of the input-password.',
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
  public label: string = 'Password:';
  public userForm = new FormGroup({
    password: new FormControl(this.password, [Validators.required, Validators.minLength(6)]),
  });
  public passControl: FormControl = this.userForm.get('password') as FormControl;
  public errorDescription = {
    required: 'validations.password.required',
    minlength: 'validations.password.minlength',
  };

  public html = `
  <form [formGroup]="userForm">
    <label class="mb-1" ngClass="text-secondary fw-bold">{{ label }}</label>
    <lib-input-password
      [placeholder]="'Insert password'"
      [validationErrors]="errorDescription"
      [control]="passControl"
      [focus]="false"
    ></lib-input-password>
    <button type="submit" (click)="sendForm()" [disabled]="!userForm.valid" class="btn btn-primary mt-3">Send Form</button>
  </form>`;

  public typeScript = `
  public password: string = 'anyPass';
  public label: string = 'Password:';

  public userForm = new FormGroup({
    password: new FormControl(this.password, [Validators.required, Validators.minLength(6)]),
  });

  public passControl: FormControl = this.userForm.get('password') as FormControl;

  public errorDescription = {
    required: 'validations.password.required',
    minlength: 'validations.password.minlength',
  };

  public sendForm(): void {
    console.log(this.userForm.getRawValue());
  }`;

  public sendForm(): void {
    console.log(this.userForm.getRawValue());
  }
}
