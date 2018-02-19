import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpecialDrinks } from './special-drinks';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SpecialDrinks,
  ],
  imports: [
    IonicPageModule.forChild(SpecialDrinks),
    ComponentsModule
  ],
  exports: [
    SpecialDrinks
  ]
})
export class SpecialDrinksModule {}
