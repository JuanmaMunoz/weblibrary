import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputPassComponent } from './components/input-pass/input-pass.component';
import { ValidationErrors } from './utils/pipes/validation-errors.pipe';

@NgModule({
  declarations: [InputTextComponent, ValidationErrors, InputPassComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  exports: [InputTextComponent, InputPassComponent],
})
export class LibModule {}
