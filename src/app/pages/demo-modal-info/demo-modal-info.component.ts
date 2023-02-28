import { Component } from '@angular/core';
import { IItem } from 'src/app/models/interfaces';

@Component({
  selector: 'app-demo-modal-info',
  templateUrl: './demo-modal-info.component.html',
  styleUrls: ['./demo-modal-info.component.scss'],
})
export class DemoModalInfoComponent {
  public title = 'Modal-info';
  public description =
    'Modal-info is a component in which we can load dynamic HTML content in the body and footer of a modal window through ng-content. In this way, we can display the desired content and have the necessary actions that the parent component requires in an easy and flexible way.';
  public inputList: IItem[] = [
    {
      name: 'title',
      type: 'string',
      description: 'Title of the modal-info.',
    },
    {
      name: 'open',
      type: 'boolean',
      description: 'Parameter to open and close the modal-info.',
    },
  ];

  public outputList: IItem[] = [
    {
      name: 'closeModal',
      type: 'EventEmitter<null>',
      description: 'Event that notifies that modal-info has been closed.',
    },
  ];

  public open: boolean = false;
  public modalTitle: string = 'Modal-info test!!!';

  public html = `
  <button (click)="openModal()" class="btn btn-primary">Open modal-info</button>

  <lib-modal-info (closeModal)="closeModal()" [open]="open" [title]="modalTitle">
    <div body class="modal-body">
      <h2>Modal description</h2>
      <p>This area is for the <strong> modal-info's description</strong></p>
    </div>
    <div footer class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="closeModal()">Close</button>
      <button type="button" class="btn btn-primary" (click)="saveChanges()">Save changes</button>
    </div>
  </lib-modal-info>`;

  public typeScript = `
  public open: boolean = false;
  public modalTitle: string = 'Modal-info test!!!';

  public openModal(): void {
    this.open = true;
  }
  public closeModal(): void {
    this.open = false;
  }
  public saveChanges(): void {
    this.closeModal();
    console.log('The changes have been saved.');
  }`;

  public openModal(): void {
    this.open = true;
  }
  public closeModal(): void {
    this.open = false;
  }
  public saveChanges(): void {
    this.closeModal();
    console.log('The changes have been saved.');
  }
}
