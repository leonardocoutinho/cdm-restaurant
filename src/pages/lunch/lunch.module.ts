import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Lunch } from './lunch';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    Lunch,
  ],
  imports: [
    IonicPageModule.forChild(Lunch),
    ComponentsModule
  ],
  exports: [
    Lunch
  ]
})
export class LunchModule {}
