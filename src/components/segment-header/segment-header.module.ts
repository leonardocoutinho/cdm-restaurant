import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SegmentHeader } from './segment-header';

@NgModule({
  declarations: [
    SegmentHeader,
  ],
  imports: [
    IonicPageModule.forChild(SegmentHeader),
  ],
  exports: [
    SegmentHeader
  ]
})
export class SegmentHeaderModule {}
