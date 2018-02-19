import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Breakfast } from './breakfast';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    Breakfast,
  ],
  imports: [
    IonicPageModule.forChild(Breakfast),
    ComponentsModule
  ],
  exports: [
    Breakfast
  ]
})
export class BreakfastModule {}
