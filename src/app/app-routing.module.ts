import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoInputComponent } from './pages/demo-input/demo-input.component';

const routes: Routes = [
  {
    path: 'input-text',
    component: DemoInputComponent,
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
