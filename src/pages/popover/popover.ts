import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { MenuService } from './../../providers/menu-service/menu-service';
import * as _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {
  
   popoverItemList =  [];
   currentPage: string;
  

  constructor(private service: MenuService, public viewCtrl: ViewController, private navParams: NavParams) {
    this.currentPage = this.navParams.get('page');    
  }


  ionViewWillLoad() {
    this.service.getMenuFood(this.currentPage).subscribe(foodType => {
      this.popoverItemList = _.uniqBy(foodType, 'type');

    });
   
    
  }

  


}