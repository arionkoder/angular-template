import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { FeatureExampleComponent } from './components';
import { FeatureExampleRoutingModule } from './feature-example-routing.module';

const MODULES: any[] = [SharedModule, FeatureExampleRoutingModule];

@NgModule({
  imports: [...MODULES],
  declarations: [FeatureExampleComponent],
})
export class FeatureExampleModule {}
