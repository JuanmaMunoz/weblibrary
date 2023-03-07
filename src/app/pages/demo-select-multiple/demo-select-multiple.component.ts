import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISelectMultiple } from 'projects/lib/src/public-api';
import { IItem } from 'src/app/models/interfaces';

@Component({
  selector: 'app-demo-select-multiple',
  templateUrl: './demo-select-multiple.component.html',
  styleUrls: ['./demo-select-multiple.component.scss'],
})
export class DemoSelectMultipleComponent {
  public title = 'Select-multiple';
  public description =
    'Select-multiple is a component that displays a series of options from which the user can choose multiple options. As @Inputs we have the FormControl, which can be required, the label and the list of selectable options.';
  public inputList: IItem[] = [
    {
      name: 'control',
      type: 'FormControl',
      description: 'FormControl where the validation logic of our component resides.',
    },
    {
      name: 'label',
      type: 'string',
      description: 'Label of the select.',
    },
    {
      name: 'values',
      type: 'ISelectMultiple[] (Interface)',
      description: 'Array that contains the values, item checked and code translation key of the options.',
    },
  ];

  public outputList: IItem[] = [
    {
      name: 'actionSelect',
      type: 'EventEmitter<ISelectMultiple[]>',
      description: 'Event that returns an array of ISelectMultiple with the selected options.',
    },
  ];

  public animals: string[] = ['dog', 'tiger'];
  public label: string = 'Select animal';
  public animalsForm = new FormGroup({
    animals: new FormControl(this.animals, [Validators.required]),
  });
  public animalsControl: FormControl = this.animalsForm.get('animals') as FormControl;
  public values: ISelectMultiple[] = [
    { value: 'dog', text: 'select.dog', checked: true },
    { value: 'cat', text: 'select.cat', checked: false },
    { value: 'fish', text: 'select.fish', checked: false },
    { value: 'bird', text: 'select.bird', checked: false },
    { value: 'horse', text: 'select.horse', checked: false },
    { value: 'tiger', text: 'select.tiger', checked: true },
  ];
  public html = `
  <form [formGroup]="animalsForm">
    <lib-select-multiple
      [label]="label"
      [control]="animalsControl"
      [values]="values"
      (actionSelect)="actionSelect($event)"
    ></lib-select-multiple>
    <button type="submit" (click)="sendForm()" [disabled]="!animalsForm.valid" class="btn btn-primary mt-3">Send Form</button>
  </form>`;

  public typeScript = `
  public animals: string[] = ['dog','tiger'];
  public label: string = 'Select animal';
  public animalsForm = new FormGroup({
    animals: new FormControl(this.animals, [Validators.required]),
  });
  public animalsControl: FormControl = this.animalsForm.get('animals') as FormControl;
  public values: ISelectMultiple[] = [
    { value: 'dog', text: 'select.dog', checked: true },
    { value: 'cat', text: 'select.cat', checked: false },
    { value: 'fish', text: 'select.fish', checked: false },
    { value: 'bird', text: 'select.bird', checked: false },
    { value: 'horse', text: 'select.horse', checked: false },
    { value: 'tiger', text: 'select.tiger', checked: true },
  ];

  public actionSelect(selectMultiple: ISelectMultiple[]): void {
    this.values = selectMultiple;
    let animals: string[] = [];
    this.values.forEach((e: ISelectMultiple) => {
      if (e.checked) {
        animals.push(e.value);
      }
    });
    this.animalsControl.setValue(animals);
  }

  public sendForm(): void {
    console.log(this.animalsForm.getRawValue());
  }
`;

  public actionSelect(selectMultiple: ISelectMultiple[]): void {
    this.values = selectMultiple;
    let animals: string[] = [];
    this.values.forEach((e: ISelectMultiple) => {
      if (e.checked) {
        animals.push(e.value);
      }
    });
    this.animalsControl.setValue(animals);
  }

  public sendForm(): void {
    console.log(this.animalsForm.getRawValue());
  }
}
