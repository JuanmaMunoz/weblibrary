import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputPassComponent } from './components/input-pass/input-pass.component';
import { ValidationErrors } from './utils/pipes/validation-errors.pipe';
import { ModalInfoComponent } from './components/modal-info/modal-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionItemComponent } from './components/accordion/accordion-item/accordion-item.component';

@NgModule({
  declarations: [
    InputTextComponent,
    ValidationErrors,
    InputPassComponent,
    ModalInfoComponent,
    DropdownComponent,
    AccordionComponent,
    AccordionItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  exports: [
    InputTextComponent,
    InputPassComponent,
    ModalInfoComponent,
    DropdownComponent,
    AccordionComponent,
  ],
})
export class LibModule {}
