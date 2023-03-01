import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { InfoComponent } from './components/info/info.component';
import { TableComponent } from './components/table/table.component';
import { LibModule } from 'projects/lib/src/lib/lib.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DemoInputComponent } from './pages/demo-input/demo-input.component';
import { CodeComponent } from './components/code/code.component';
import { InfoCodeComponent } from './components/info-code/info-code.component';
import { DemoInputPasswordComponent } from './pages/demo-input-password/demo-input-password.component';
import { DemoModalInfoComponent } from './pages/demo-modal-info/demo-modal-info.component';
import { DemoDropDownComponent } from './pages/demo-drop-down/demo-drop-down.component';
import { DemoAccordionComponent } from './pages/demo-accordion/demo-accordion.component';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
@NgModule({
  declarations: [AppComponent, MenuComponent, InfoComponent, TableComponent, DemoInputComponent, CodeComponent, InfoCodeComponent, DemoInputPasswordComponent, DemoModalInfoComponent, DemoDropDownComponent, DemoAccordionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
