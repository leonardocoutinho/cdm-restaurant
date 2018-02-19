import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrinksTab } from './drinks-tab';

@NgModule({
  declarations: [
    DrinksTab,
  ],
  imports: [
    IonicPageModule.forChild(DrinksTab),
  ]
})
export class DrinksTabModule {}
