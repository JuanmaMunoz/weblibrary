import { Component } from '@angular/core';
import { SizeModalInfo } from 'projects/lib/src/public-api';
import { IItem } from 'src/app/models/interfaces';

@Component({
  selector: 'app-demo-modal-info',
  templateUrl: './demo-modal-info.component.html',
  styleUrls: ['./demo-modal-info.component.scss'],
})
export class DemoModalInfoComponent {
  public title = 'Modal-info';
  public description =
    'Modal-info is a component in which we can load dynamic HTML content in the header, body and footer of a modal window through ng-content. In this way, we can display the desired content and have the necessary actions that the parent component requires in an easy and flexible way.';
  public inputList: IItem[] = [
    {
      name: 'open',
      type: 'boolean',
      description: 'Parameter to open and close the modal-info.',
    },
    {
      name: 'size',
      type: 'SizeModalInfo (Enum)',
      description: 'Enum with the component´s size types',
    },
  ];

  public outputList: IItem[] = [
    {
      name: 'closeModal',
      type: 'EventEmitter<boolean>',
      description: 'Event that notifies that modal-info has been closed.',
    },
  ];

  public open: boolean = false;
  public modalTitle: string = 'Modal-info test!!!';
  public sizeModal: SizeModalInfo = SizeModalInfo.Large;

  public html = `
  <button (click)="openModal()" class="btn btn-primary">Open modal-info</button>

  <lib-modal-info (closeModal)="closeModal($event)" [size]="sizeModal" [open]="open">
    <h5 header class="modal-title text-primary"><i class="bi bi-boxes"></i> {{ modalTitle }}</h5>
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
  public sizeModal: SizeModalInfo = SizeModalInfo.Large;

  public openModal(): void {
    this.open = true;
  }
  public closeModal($event?: boolean): void {
    this.open = $event ? $event : false;
  }
  public saveChanges(): void {
    this.closeModal();
    console.log('The changes have been saved.');
  }`;

  public openModal(): void {
    this.open = true;
  }
  public closeModal($event?: boolean): void {
    this.open = $event ? $event : false;
  }
  public saveChanges(): void {
    this.closeModal();
    console.log('The changes have been saved.');
  }
}
