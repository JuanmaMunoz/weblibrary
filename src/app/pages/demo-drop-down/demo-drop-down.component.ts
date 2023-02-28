import { Component } from '@angular/core';
import { IDropDown, TypeBtn, TypeSizeBtn } from 'projects/lib/src/public-api';
import { IItem } from 'src/app/models/interfaces';

@Component({
  selector: 'app-demo-drop-down',
  templateUrl: './demo-drop-down.component.html',
  styleUrls: ['./demo-drop-down.component.scss'],
})
export class DemoDropDownComponent {
  public title = 'Dropdown';
  public description =
    'Input-text is a component with which we can establish validations for the different "input-text" elements we have in our application. It will go inside a FormGroup where we will establish its logic. Its main @Inputs will be a FormControl, which will contain its logic, and an object for the respective texts when the validations are not met.';
  public inputList: IItem[] = [
    {
      name: 'label',
      type: 'string',
      description: 'Translation code for the button´s text',
    },
    {
      name: 'open',
      type: 'boolean',
      description: 'Parameter to open and close the dropdown.',
    },
    {
      name: 'dropDownList',
      type: 'IDropDown []',
      description: 'Object that contains the action code and translation key of dropdown´s list.',
    },
    {
      name: 'typeBtn',
      type: 'TypeBtn',
      description: 'Parameter to set the type of button.',
    },
    {
      name: 'typeSizeBtn',
      type: 'TypeSizeBtn',
      description: 'Parameter to set the size of button.',
    },
  ];

  public open: boolean = false;
  public label: string = 'My DropDown';
  public typeBtn: TypeBtn = TypeBtn.OutPrimary;
  public typeSizeBtn: TypeSizeBtn = TypeSizeBtn.Large;
  public dropDownList: IDropDown[] = [
    {
      name: 'update',
      text: 'dropDown.update',
    },
    {
      name: 'insert',
      text: 'dropDown.insert',
    },
    {
      name: 'delete',
      text: 'dropDown.delete',
    },
  ];

  public html = `
  <lib-dropdown
    [label]="label"
    [open]="open"
    [dropDownList]="dropDownList"
    [typeBtn]="typeBtn"
    [typeSizeBtn]="typeSizeBtn"
    (dropDownActions)="action($event)"
  ></lib-dropdown>`;

  public typeScript = `
  public open: boolean = false;
  public label: string = 'My DropDown';
  public typeBtn: TypeBtn = TypeBtn.OutPrimary;
  public typeSizeBtn: TypeSizeBtn = TypeSizeBtn.Large;
  public dropDownList: IDropDown[] = [
    {
      name: 'update',
      text: 'dropDown.update',
    },
    {
      name: 'insert',
      text: 'dropDown.insert',
    },
    {
      name: 'delete',
      text: 'dropDown.delete',
    },
  ];`;

  public action(action: string): void {
    switch (action) {
      case 'insert':
        console.log('User inserted successfully');
        break;
      case 'update':
        console.log('User updated successfully');
        break;
      case 'delete':
        console.log('User deleted successfully');
        break;
    }
  }
}
