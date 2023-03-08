import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AlertsComponent } from './components/alerts/alerts.component';
import { AlertComponent } from './components/alert/alert.component';
import { SelectComponent } from './components/select/select.component';
import { SelectMultipleComponent } from './components/select-multiple/select-multiple.component';
import { BoxItemComponent } from './components/box-item/box-item.component';
import { CheckComponent } from './components/select-multiple/check/check.component';
import { InputTextNGMComponent } from './components/input-text-ngm/input-text-ngm.component';
import { LabelComponent } from './components/label/label.component';

@NgModule({
  declarations: [
    InputTextComponent,
    ValidationErrors,
    InputPassComponent,
    ModalInfoComponent,
    DropdownComponent,
    AccordionComponent,
    AccordionItemComponent,
    AlertsComponent,
    AlertComponent,
    SelectComponent,
    SelectMultipleComponent,
    BoxItemComponent,
    CheckComponent,
    InputTextNGMComponent,
    LabelComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
  ],
  exports: [
    InputTextComponent,
    InputPassComponent,
    ModalInfoComponent,
    DropdownComponent,
    AccordionComponent,
    AlertsComponent,
    AlertComponent,
    AccordionItemComponent,
    SelectComponent,
    SelectMultipleComponent,
    BoxItemComponent,
    InputTextNGMComponent,
    LabelComponent,
  ],
})
export class LibModule {}
