import { Component } from '@angular/core';
import { IAccordionItem } from 'projects/lib/src/public-api';
import { IItem } from 'src/app/models/interfaces';

@Component({
  selector: 'app-demo-accordion',
  templateUrl: './demo-accordion.component.html',
  styleUrls: ['./demo-accordion.component.scss'],
})
export class DemoAccordionComponent {
  public title = 'Accordion';
  public description =
    'Accordion is a component that contains a list of drawers that contain a title and a description. Both parameters will be translation codes that can be formatted with different CSS styles.';
  public inputList: IItem[] = [
    {
      name: 'accordionItems',
      type: 'IAccordion[]',
      description: 'Array of IAccordion containing the translation codes for the title and descriptions of the component.',
    },
    {
      name: 'onlyOneOpen',
      type: 'boolean',
      description: 'Parameter to set whether only one drawer of the accordion can be open at a time.',
    },
  ];

  public outputList: IItem[] = [
    {
      name: 'accordionAction',
      type: 'EventEmitter<IAccordion[]>',
      description: 'Event that returns an array of updated IAccordion according to the opening of the drawers.',
    },
  ];

  public accordionItems: IAccordionItem[] = [
    { index: 0, open: true },
    { index: 1, open: false },
  ];

  public html = `
  <lib-accordion [accordionItems]="accordionItems" [onlyOneOpen]="true" (accordionAction)="action($event)"></lib-accordion>`;

  public typeScript = `
  public accordionItems: IAccordion[] = [
    {
      title: 'accordion.title1',
      description: 'accordion.description1',
      open: true,
    },
    {
      title: 'accordion.title2',
      description: 'accordion.description2',
      open: false,
    },
    {
      title: '<b>Chocolat</b> pie recipe',
      description: 'In a <span class="text-primary">large mixing bowl</span>, whisk together the sugar, flour, cocoa powder, and salt. <p> Beat the eggs into the dry ingredients until well combined.</p> ',
      open: false,
    },
  ];

  public action(accordion: IAccordion[]): void {
    this.accordionItems = accordion;
    console.log(this.accordionItems);
  }
  `;

  public action(accordionItem: IAccordionItem): void {
    this.accordionItems.forEach((e: IAccordionItem) => {
      accordionItem.index === e.index ? (e.open = accordionItem.open) : (e.open = false);
    });
  }
}
