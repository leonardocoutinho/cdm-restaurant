import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { MenuService } from '../../providers/menu-service/menu-service';
import { Observable } from 'rxjs/Observable';
import { MenuFoods } from '../../models/interfaces';

@IonicPage()
@Component({
  selector: 'page-lunch',
  templateUrl: 'lunch.html',
})
export class Lunch {
  currentPage: any;
  menuFoodsRef$: Observable<MenuFoods[]>;
  public food: string;
  
  constructor(private popoverCtrl:PopoverController, private service: MenuService,private navParams: NavParams, private navCtrl: NavController) {
    this.currentPage = this.navParams.get('page');
    this.food = this.currentPage;
  }

  ionViewDidLoad() {
    this.menuFoodsRef$ = this.service.getMenuFood(this.currentPage);
  }


  filterFood(selectedValue: any) {

    let popover = this.popoverCtrl.create('PopoverPage',
      {page:this.currentPage}
    );
    
    popover.present({
      ev: selectedValue
    });
    
    popover.onDidDismiss((popoverData) => {
      selectedValue = popoverData;
      console.log('Selected Value: ', selectedValue);
    
      this.menuFoodsRef$ = this.service.getMenuFood(this.currentPage);
         
      this.menuFoodsRef$ = this.menuFoodsRef$.map((foods: MenuFoods[]) => {
        return foods.filter((food: MenuFoods) => {
          if (selectedValue === null || selectedValue === undefined) {
            return this.menuFoodsRef$;
          }
         
          if (selectedValue === food.type) {
            return (food.type);
          }                
        });      
      });  
    })
  }

  
 
}