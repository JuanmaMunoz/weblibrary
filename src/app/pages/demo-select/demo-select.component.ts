import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISelect } from 'projects/lib/src/public-api';
import { IItem } from 'src/app/models/interfaces';

@Component({
  selector: 'app-demo-select',
  templateUrl: './demo-select.component.html',
  styleUrls: ['./demo-select.component.scss'],
})
export class DemoSelectComponent {
  public title = 'Select';
  public description =
    'Select is a component that contains an HTML select element to which we assign logic through a reactive form. Therefore, this component is designed to be placed inside a FormGroup and will include its corresponding FormControl as a parameter. Only one option can be selected.';
  public inputList: IItem[] = [
    {
      name: 'control',
      type: 'FormControl',
      description: 'FormControl where the validation logic of our component resides.',
    },
    {
      name: 'values',
      type: 'ISelect[] (Interface)',
      description: 'Array that contains the code and translation key of the options.',
    },
  ];

  public animal: string = 'cat';
  public label: string = 'Select animal:';
  public animalForm = new FormGroup({
    animal: new FormControl('cat', [Validators.required]),
  });
  public animalControl: FormControl = this.animalForm.get('animal') as FormControl;
  public values: ISelect[] = [
    { value: 'dog', text: 'select.dog' },
    { value: 'cat', text: 'select.cat' },
  ];
  public html = `
  <label class="mb-1" ngClass="text-secondary fw-bold">{{ label }}</label>
  <form [formGroup]="animalForm">
    <lib-select [control]="animalControl" [values]="values" [focus]="false"></lib-select>
    <button type="submit" (click)="sendForm()" [disabled]="!animalForm.valid" class="btn btn-primary mt-3">Send Form</button>
  </form>`;

  public typeScript = `
  public animal: string = 'cat';
  public label: string = 'Select animal:';

  public animalForm = new FormGroup({
    animal: new FormControl('cat', [Validators.required]),
  });

  public animalControl: FormControl = this.animalForm.get('animal') as FormControl;

  public values: ISelect[] = [
    { value: 'dog', text: 'select.dog' },
    { value: 'cat', text: 'select.cat' },
  ];

  public sendForm(): void {
    console.log(this.animalForm.getRawValue());
  }`;

  public sendForm(): void {
    console.log(this.animalForm.getRawValue());
  }
}
