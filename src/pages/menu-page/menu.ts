import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class Menu {
  constructor(public navCtrl: NavController) {
    
  }

  selectPage(page:string) {
    this.navCtrl.push(page, {
      page
    });
  }



}
