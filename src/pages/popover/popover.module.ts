import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverPage } from './popover';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module'

@NgModule({
    declarations: [
        PopoverPage,
    ],
    imports: [
        IonicPageModule.forChild(PopoverPage),
        ComponentsModule,
        PipesModule
        
    ],
    exports: [
        PopoverPage
    ]
})
export class PopoverPageModule { }
