import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SegmentHeader } from './segment-header/segment-header';
import { LunchComponent } from './lunch-component/lunch-component';
import { SearchComponent } from './search-component/search-component';
import { AppetizerComponent } from './appetizer-component/appetizer-component';

@NgModule({
    declarations:[
      SegmentHeader,
      LunchComponent,
      SearchComponent,
      AppetizerComponent
    ],
    imports:[
        IonicModule
    ],
    exports:[
       SegmentHeader,
       LunchComponent,
       SearchComponent,
       AppetizerComponent
    ]
})

export class ComponentsModule {

}

