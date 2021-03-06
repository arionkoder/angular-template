import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureExampleComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: FeatureExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureExampleRoutingModule {}
