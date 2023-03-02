import { Component } from '@angular/core';
import { IDropDown, TypeBtn, SizeBtn } from 'projects/lib/src/public-api';
import { IItem } from 'src/app/models/interfaces';

@Component({
  selector: 'app-demo-drop-down',
  templateUrl: './demo-drop-down.component.html',
  styleUrls: ['./demo-drop-down.component.scss'],
})
export class DemoDropDownComponent {
  public title = 'Dropdown';
  public description =
    'Dropdown is a component that displays a list of options when its button is pressed. This component will notify the parent component about the selected option, where the application logic will reside. In this component, there will be parameters available to customize the color and size of the button.';
  public inputList: IItem[] = [
    {
      name: 'open',
      type: 'boolean',
      description: 'Parameter to display the dropdown initially open or closed.',
    },
    {
      name: 'dropDown',
      type: 'IDropDown',
      description: 'Object that contains the data model to build the component.',
    },
  ];

  public outputList: IItem[] = [
    {
      name: 'dropDownAction',
      type: 'EventEmitter<string>',
      description: 'Event that indicates to the parent component the selected action.',
    },
  ];

  public open: boolean = false;
  public dropDown: IDropDown = {
    label: 'My DropDown',
    typeBtn: TypeBtn.OutPrimary,
    sizeBtn: SizeBtn.Large,
    dropDownList: [
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
    ],
  };

  public html = `
  <lib-dropdown [open]="open" [dropDown]="dropDown" (dropDownAction)="action($event)"></lib-dropdown>`;

  public typeScript = `
  public open: boolean = false;
  public dropDown: IDropDown = {
    label: 'My DropDown',
    typeBtn: TypeBtn.OutPrimary,
    sizeBtn: SizeBtn.Large,
    dropDownList: [
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
    ],
  };

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
  }`;

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
