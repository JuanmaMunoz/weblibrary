import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISelectMultiple, ISelectMultipleItem, TypeAlert, TypeColor } from 'projects/lib/src/public-api';
import { IItem } from 'src/app/models/interfaces';

@Component({
  selector: 'app-demo-select-multiple',
  templateUrl: './demo-select-multiple.component.html',
  styleUrls: ['./demo-select-multiple.component.scss'],
})
export class DemoSelectMultipleComponent {
  public title = 'Select-multiple';
  public description =
    'Select-multiple is a component that allows selecting multiple options. It can be used inside and outside of a reactive form. We show an example of each type.';
  public inputList: IItem[] = [
    {
      name: 'control',
      type: 'FormControl',
      description: 'FormControl where the validation logic of our component resides. (Only for reactive-form)',
    },
    {
      name: 'selectMultiple',
      type: 'ISelectMultiple (Interface)',
      description: 'Object that contains the values, item checked and code translation key of the options.',
    },
    {
      name: 'validationErrors',
      type: '{typeValidation (required, minLength etc ...): codeTraduction(string)}',
      description: 'Object that contains the code and translation key of the respective validation errors. (Only for reactive-form)',
    },
  ];

  public outputList: IItem[] = [
    {
      name: 'actionSelect',
      type: 'EventEmitter<ISelectMultiple>',
      description: 'Event that returns an ISelectMultiple object with the selected options.',
    },
  ];

  public animals: string[] = [];
  public label: string = 'Select animals:';
  public animalsForm = new FormGroup({
    animals: new FormControl(this.animals, [Validators.required, Validators.minLength(2)]),
  });
  public errorDescription = {
    required: 'validations.multiselect.required',
    minlength: 'validations.multiselect.minlength',
  };
  public animalsControl: FormControl = this.animalsForm.get('animals') as FormControl;
  public selectMultipleForm: ISelectMultiple = {
    placeholder: 'Select animals',
    colorItems: TypeColor.Secondary,
    values: [
      { value: 'dog', text: 'select.dog', checked: false },
      { value: 'cat', text: 'select.cat', checked: false },
      { value: 'fish', text: 'select.fish', checked: false },
      { value: 'bird', text: 'select.bird', checked: false },
      { value: 'horse', text: 'select.horse', checked: false },
      { value: 'tiger', text: 'select.tiger', checked: false },
    ],
  };

  public selectMultiple: ISelectMultiple = {
    placeholder: 'Select animals',
    colorItems: TypeColor.Primary,
    values: [
      { value: 'dog', text: 'select.dog', checked: false },
      { value: 'cat', text: 'select.cat', checked: false },
      { value: 'fish', text: 'select.fish', checked: false },
      { value: 'bird', text: 'select.bird', checked: false },
      { value: 'horse', text: 'select.horse', checked: false },
      { value: 'tiger', text: 'select.tiger', checked: false },
    ],
  };

  public typeAlert: TypeAlert = TypeAlert.Info;
  public textInfo: string = '';
  public html = `
  <label class="mb-1" ngClass="text-secondary fw-bold">{{ label }}</label>
  <lib-select-multiple [selectMultiple]="selectMultiple" (actionSelect)="actionSelect($event)"></lib-select-multiple>
  <div class="mt-3">
    <lib-alert [typeAlert]="typeAlert" [open]="true">
      <h2 content>{{ textInfo }}</h2>
    </lib-alert>
  </div>

  <!--Reactive Forms-->

  <form [formGroup]="animalsForm">
    <label class="mb-1" ngClass="text-secondary fw-bold">{{ label }}</label>
    <lib-select-multiple
      [selectMultiple]="selectMultipleForm"
      [control]="animalsControl"
      [validationErrors]="errorDescription"
      (actionSelect)="actionSelectForm($event)"
    ></lib-select-multiple>
    <button type="submit" (click)="sendForm()" [disabled]="!animalsForm.valid" class="btn btn-primary mt-3">Send Form</button>
  </form>`;

  public typeScript = `
  public animals: string[] = [];
  public label: string = 'Select animals:';
  public animalsForm = new FormGroup({
    animals: new FormControl(this.animals, [Validators.required, Validators.minLength(2)]),
  });
  public errorDescription = {
    required: 'validations.multiselect.required',
    minlength: 'validations.multiselect.minlength',
  };
  public animalsControl: FormControl = this.animalsForm.get('animals') as FormControl;
  public selectMultiple: ISelectMultiple = {
    placeholder: 'Select animals',
    colorItems: TypeColor.Secondary,
    values: [
      { value: 'dog', text: 'select.dog', checked: false },
      { value: 'cat', text: 'select.cat', checked: false },
      { value: 'fish', text: 'select.fish', checked: false },
      { value: 'bird', text: 'select.bird', checked: false },
      { value: 'horse', text: 'select.horse', checked: false },
      { value: 'tiger', text: 'select.tiger', checked: false },
    ],
  };

  public actionSelect(selectMultiple: ISelectMultiple): void {
    this.textInfo = '';
    this.selectMultiple = selectMultiple;
    this.selectMultiple.values.forEach((e: ISelectMultipleItem) => {
      if (e.checked) this.textInfo = this.textInfo + '('+ e.value +')';
    });
  }

  //Reactive Forms

  public actionSelectForm(selectMultiple: ISelectMultiple): void {
    this.selectMultiple = selectMultiple;
    let animals: string[] = [];
    this.selectMultiple.values.forEach((e: ISelectMultipleItem) => {
      if (e.checked) animals.push(e.value);
    });
    this.animalsControl.setValue(animals);
  }

  public sendForm(): void {
    console.log(this.animalsForm.getRawValue());
  }
`;

  public actionSelect(selectMultiple: ISelectMultiple): void {
    this.textInfo = '';
    this.selectMultiple = selectMultiple;
    this.selectMultiple.values.forEach((e: ISelectMultipleItem) => {
      if (e.checked) this.textInfo = this.textInfo + `(${e.value}) `;
    });
  }

  public actionSelectForm(selectMultiple: ISelectMultiple): void {
    this.selectMultipleForm = selectMultiple;
    let animals: string[] = [];
    this.selectMultipleForm.values.forEach((e: ISelectMultipleItem) => {
      if (e.checked) animals.push(e.value);
    });
    this.animalsControl.setValue(animals);
  }

  public sendForm(): void {
    console.log(this.animalsForm.getRawValue());
  }
}
