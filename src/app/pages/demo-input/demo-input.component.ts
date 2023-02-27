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
  public description = 'Input-text component';
  public inputList: IItem[] = [
    {
      name: 'control',
      type: 'FormControl',
      description: 'Formcontrol to manager the logic and input´s validations.',
    },
    {
      name: 'label',
      type: 'string',
      description: 'Input´s label.',
    },
    {
      name: 'validationsErrors',
      type: 'any',
      description: 'Object with the input´s validations descriptions.',
    },
    {
      name: 'focus',
      type: 'boolean',
      description: 'Parameter to stablish input´focus.',
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
}
