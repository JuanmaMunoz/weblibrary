import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IItem } from 'src/app/models/interfaces';

@Component({
  selector: 'app-demo-select',
  templateUrl: './demo-select.component.html',
  styleUrls: ['./demo-select.component.scss'],
})
export class DemoSelectComponent {
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
      description: 'Label of the input-text.',
    },
    {
      name: 'values',
      type: 'string[]',
      description: 'Object that contains the code and translation key of the respective validation errors.',
    },
  ];

  public animal: string = 'Cat';
  public label: string = 'Select animal';
  public formAnimal = new FormGroup({
    animal: new FormControl(this.animal, [Validators.required]),
  });
  public animalControl: FormControl = this.formAnimal.get('animal') as FormControl;
  public values = ['Dog', 'Cat', 'Fish', 'Bird'];
  public html = `
  <lib-select [label]="label" [control]="animalControl" [values]="values" [focus]="false"></lib-select>`;

  public typeScript = `
  public animal: string = 'Cat';
  public label: string = 'Select animal';
  public formAnimal = new FormGroup({
    animal: new FormControl(this.animal, [Validators.required]),
  });
  public animalControl: FormControl = this.formAnimal.get('animal') as FormControl;
  public values = ['Dog', 'Cat', 'Fish', 'Bird'];`;
}
