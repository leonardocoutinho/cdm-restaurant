import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FastFood } from './fast-food';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    FastFood,
  ],
  imports: [
    IonicPageModule.forChild(FastFood),
    ComponentsModule
  ],
  exports: [
    FastFood
  ]
})
export class FastFoodModule {}
