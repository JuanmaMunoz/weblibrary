import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FontSize, FontWeight, ILabel, TextColor, TypeColor } from 'projects/lib/src/public-api';
import { IItem } from 'src/app/models/interfaces';

@Component({
  selector: 'app-demo-input',
  templateUrl: './demo-input.component.html',
  styleUrls: ['./demo-input.component.scss'],
})
export class DemoInputComponent {
  public title = 'Input-text';
  public description =
    'Input-text is a component that contains an HTML input text element to which we assign logic through a reactive form. Therefore, this component is designed to be placed inside a FormGroup and will include its corresponding FormControl as a parameter.';
  public inputList: IItem[] = [
    {
      name: 'control',
      type: 'FormControl',
      description: 'FormControl where the validation logic of our component resides.',
    },
    {
      name: 'placeholder',
      type: 'string',
      description: 'Placeholder of the input-text.',
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
  public labelEmail: ILabel = { text: 'Email:', fontWeight: FontWeight.Bold, color: TextColor.Secondary };
  public labelUser: ILabel = { text: 'User:', fontWeight: FontWeight.Bold, color: TextColor.Secondary };
  public userForm = new FormGroup({
    email: new FormControl(this.email, [Validators.required, Validators.email]),
    user: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  public emailControl: FormControl = this.userForm.get('email') as FormControl;
  public userControl: FormControl = this.userForm.get('user') as FormControl;
  public errorDescriptionEmail = {
    required: 'validations.email.required',
    email: 'validations.email.invalid',
  };
  public errorDescriptionUser = {
    required: 'validations.user.required',
    minlength: 'validations.user.minlength',
  };

  public html = `
  <form [formGroup]="userForm">
    <label class="mb-1" [ngClass]="[labelEmail.color, labelEmail.fontWeight]">{{ labelEmail.text }}</label>
    <lib-input-text
      [validationErrors]="errorDescriptionEmail"
      [control]="emailControl"
      [placeholder]="'Insert email'"
      [focus]="false"
    ></lib-input-text>

    <label class="mt-2 mb-1" [ngClass]="[labelUser.color, labelUser.fontWeight]">{{ labelUser.text }}</label>
    <lib-input-text
      [validationErrors]="errorDescriptionUser"
      [control]="userControl"
      [placeholder]="'Insert email'"
      [focus]="false"
    ></lib-input-text>
    <button type="submit" (click)="sendForm()" [disabled]="!userForm.valid" class="btn btn-primary mt-3">Send Form</button>
  </form>`;

  public typeScript = `
  public email: string = 'test@vintegris.com';
  public labelEmail: ILabel = { text: 'Email:', fontWeight: FontWeight.Bold, color: TextColor.Secondary };
  public labelUser: ILabel = { text: 'User:', fontWeight: FontWeight.Bold, color: TextColor.Secondary };

  public userForm = new FormGroup({
    email: new FormControl(this.email, [Validators.required, Validators.email]),
    user: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  public emailControl: FormControl = this.userForm.get('email') as FormControl;
  public userControl: FormControl = this.userForm.get('user') as FormControl;

  public errorDescriptionEmail = {
    required: 'validations.email.required',
    email: 'validations.email.invalid',
  };

  public errorDescriptionUser = {
    required: 'validations.user.required',
    minlength: 'validations.user.minlength',
  };

  public sendForm(): void {
    console.log(this.userForm.getRawValue());
  }`;

  public sendForm(): void {
    console.log(this.userForm.getRawValue());
  }
}
