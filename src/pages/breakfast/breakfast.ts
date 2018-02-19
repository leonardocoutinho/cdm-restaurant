import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { MenuService } from '../../providers/menu-service/menu-service';
import { MenuFoods } from '../../models/interfaces';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-breakfast',
  templateUrl: 'breakfast.html',
})
export class Breakfast {
  menuFoodsRef$: Observable<MenuFoods[]>;
  currentPage: string;

  constructor(private popoverCtrl: PopoverController, private service: MenuService,  public navCtrl: NavController, private navParams: NavParams) {
     this.currentPage = this.navParams.get('page');
    
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
