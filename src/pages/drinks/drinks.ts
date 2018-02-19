import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, App, PopoverController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { MenuFoods } from '../../models/interfaces';
import { MenuService } from '../../providers/menu-service/menu-service';

@IonicPage()
@Component({
  selector: 'page-drinks',
  templateUrl: 'drinks.html',
})
export class Drinks {

  menuFoodsRef$: Observable<MenuFoods[]>;
  currentPage: string;
  
  constructor(private popoverCtrl:PopoverController, private service: MenuService,private app: App, public navCtrl: NavController, public navParams: NavParams) {
    this.currentPage = this.navParams.get('page');
  }

  ionViewDidLoad() {
    this.menuFoodsRef$ = this.service.getMenuFood(this.currentPage);
  }

  back() {
    this.app.getRootNav().setRoot('Home');
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
          console.log('Menu Food Ref', selectedValue);
    
          this.menuFoodsRef$ = this.service.getMenuFood(this.currentPage);
    
          this.menuFoodsRef$ = this.menuFoodsRef$.map((foods: MenuFoods[]) => {
            return foods.filter((food: MenuFoods) => {
              if (selectedValue === null || selectedValue === undefined) {
                return this.menuFoodsRef$;
              }
              if (selectedValue === food.type) {
                 return (food.type);
              }
                          
              
            })   
          })
        })
      }
  }