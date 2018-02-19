import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { MenuFoods } from '../../models/interfaces';
import { MenuService } from '../../providers/menu-service/menu-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {

  allData: any = new Array(6);

  autoPlay: number;

  dishDayRef$: Observable<MenuFoods[]>;
  dishDay: string = 'dish-day';

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: MenuService) {
    this.autoPlay = 2000;
  }

  ionViewWillLoad() {
    this.dishDayRef$ = this.service.getMenuFood(this.dishDay);
  }

}
