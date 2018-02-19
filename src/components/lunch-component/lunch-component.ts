import { Component, OnInit, Input } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { MenuFoods } from '../../models/interfaces';
import { MenuService } from '../../providers/menu-service/menu-service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'lunch-component',
  templateUrl: 'lunch-component.html'
})
export class LunchComponent implements OnInit {
  @Input() currentPage: string;
  menuFoodsRef$: Observable<MenuFoods[]>;
  

    constructor(private service: MenuService, private navParams: NavParams, private navCtrl: NavController) {
      
    }

    ngOnInit() {
      this.menuFoodsRef$ = this.service.getMenuFood(this.currentPage);
    }


}