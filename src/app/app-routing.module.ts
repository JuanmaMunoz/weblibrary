import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoInputPasswordComponent } from './pages/demo-input-password/demo-input-password.component';
import { DemoInputComponent } from './pages/demo-input/demo-input.component';
import { DemoModalInfoComponent } from './pages/demo-modal-info/demo-modal-info.component';

const routes: Routes = [
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
    path: '**',
    redirectTo: 'input-text',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
