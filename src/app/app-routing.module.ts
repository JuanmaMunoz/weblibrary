import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoAccordionComponent } from './pages/demo-accordion/demo-accordion.component';
import { DemoAlertSystemComponent } from './pages/demo-alert-system/demo-alert-system.component';
import { DemoAlertComponent } from './pages/demo-alert/demo-alert.component';
import { DemoDropDownComponent } from './pages/demo-drop-down/demo-drop-down.component';
import { DemoInputPasswordComponent } from './pages/demo-input-password/demo-input-password.component';
import { DemoInputComponent } from './pages/demo-input/demo-input.component';
import { DemoModalInfoComponent } from './pages/demo-modal-info/demo-modal-info.component';

const routes: Routes = [
  {
    path: 'alert',
    component: DemoAlertComponent,
  },
  {
    path: 'alert-system',
    component: DemoAlertSystemComponent,
  },
  {
    path: 'input-text',
    component: DemoInputComponent,
  },
  {
    path: 'input-password',
    component: DemoInputPasswordComponent,
  },
  {
    path: 'modal-info',
    component: DemoModalInfoComponent,
  },
  {
    path: 'dropdown',
    component: DemoDropDownComponent,
  },
  {
    path: 'accordion',
    component: DemoAccordionComponent,
  },
  {
    path: '**',
    redirectTo: 'input-text',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
