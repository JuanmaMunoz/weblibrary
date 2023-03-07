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
  public title = 'Select';
  public description =
    'Select is a component that will display a series of selectable options with one of them being the default. Its @Inputs will be a FormControl with its respective logic, a label and the selectable list. Only one option can be selected.';
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
      type: 'string[]',
      description: 'Array that contains the code and translation key of the options.',
    },
  ];

  public animals: string[] = [];
  public label: string = 'Select animal';
  public animalForm = new FormGroup({
    animal: new FormControl(this.animals, [Validators.required]),
  });
  public animalControl: FormControl = this.animalForm.get('animal') as FormControl;
  public values: ISelectMultiple[] = [
    { value: 'dog', text: 'select.dog', checked: false },
    { value: 'cat', text: 'select.cat', checked: false },
    { value: 'fish', text: 'select.fish', checked: false },
    { value: 'bird', text: 'select.bird', checked: false },
    { value: 'horse', text: 'select.horse', checked: false },
    { value: 'tiger', text: 'select.tiger', checked: false },
  ];
  public html = `
<lib-select [label]="label" [control]="animalControl" [values]="values" [focus]="false"></lib-select>`;

  public typeScript = `
public animal: string = 'cat';
public label: string = 'Select animal';
public formAnimal = new FormGroup({
  animal: new FormControl(this.animal, [Validators.required]),
});
public animalControl: FormControl = this.formAnimal.get('animal') as FormControl;
public values = [
  { value: 'dog', text: 'select.dog' },
  { value: 'cat', text: 'select.cat' },
];`;

  public actionSelect(selecMultiple: ISelectMultiple[]): void {
    this.values = selecMultiple;
    let animals: string[] = [];
    this.values.forEach((e: ISelectMultiple) => {
      if (e.checked) {
        animals.push(e.value);
      }
    });
    this.animalControl.setValue(animals);
  }

  public sendForm(): void {
    console.log(this.animalForm.getRawValue());
  }
}
