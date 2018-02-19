import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Drinks } from './drinks';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    Drinks,
  ],
  imports: [
    IonicPageModule.forChild(Drinks),
    ComponentsModule
  ],
  exports: [
    Drinks
  ]
})
export class DrinksModule {}
