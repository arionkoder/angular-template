import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'feature-example',
    loadChildren: () =>
      import('@features/feature-example/feature-example.module').then(
        (m) => m.FeatureExampleModule
      ),
  },
  {
    path: '',
    redirectTo: 'feature-example',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
