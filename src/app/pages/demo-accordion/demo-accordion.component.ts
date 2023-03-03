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
    'Accordion is a component that contains a list of drawers that contain a title and a description that will be injected through ng-content. In case we only want to have a single drawer open, we will need the @Input accordionItem and the @Output itemAction.';
  public inputList: IItem[] = [
    {
      name: 'accordionItem',
      type: 'IAccordionItem (Interface)',
      description:
        'Object that indicates the index and whether the drawer is open or not. It is only necessary in case we do not want our accordion to be multiple.',
    },
  ];

  public outputList: IItem[] = [
    {
      name: 'itemAction',
      type: 'EventEmitter<IAccordionItem>',
      description: 'Event that returns an IAccordionItem object.',
    },
  ];

  public accordionItems: IAccordionItem[] = [
    { index: 0, open: true },
    { index: 1, open: false },
  ];

  public html = `
  <lib-accordion>
    <div content>
      <lib-accordion-item [accordionItem]="accordionItems[0]" (itemAction)="action($event)">
        <div head><h5 [innerHTML]="'accordion.title1' | translate"></h5></div>
        <div body class="text-center">
          <h2>Delicious!!</h2>
          <hr />
          <img class="img-fluid" alt="curry" [src]="'assets/images/curry.png'" />
          <h5 [innerHTML]="'accordion.description1' | translate"></h5>
        </div>
      </lib-accordion-item>

      <lib-accordion-item [accordionItem]="accordionItems[1]" (itemAction)="action($event)">
        <div head><h5 [innerHTML]="'accordion.title2' | translate"></h5></div>
        <div body class="text-center">
          <h4 [innerHTML]="'accordion.description2' | translate"></h4>
          <img class="img-fluid" alt="bolognese" [src]="'assets/images/blognese.png'" />
        </div>
      </lib-accordion-item>
    </div>
  </lib-accordion>

  <!--Accordion Multiple-->

  <lib-accordion>
    <div content>
      <lib-accordion-item>
        <div head><h5>Item 1</h5></div>
        <div body>
          <p>Description Item 1 ...</p>
        </div>
      </lib-accordion-item>
      <lib-accordion-item>
        <div head><h5>Item 2</h5></div>
        <div body>
          <p>Description Item 2 ...</p>
        </div>
      </lib-accordion-item>
    </div>
  </lib-accordion>
  `;

  public typeScript = `
  public accordionItems: IAccordionItem[] = [
    { index: 0, open: true },
    { index: 1, open: false },
  ];

  public action(accordionItem: IAccordionItem): void {
    this.accordionItems.forEach((e: IAccordionItem) => {
      accordionItem.index === e.index ? (e.open = accordionItem.open) : (e.open = false);
    });
  }
  `;

  public action(accordionItem: IAccordionItem): void {
    this.accordionItems.forEach((e: IAccordionItem) => {
      accordionItem.index === e.index ? (e.open = accordionItem.open) : (e.open = false);
    });
  }
}
