import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, PopoverController } from 'ionic-angular';
import { MenuService } from '../../providers/menu-service/menu-service';
import { Observable } from 'rxjs/Observable';
import { MenuFoods } from '../../models/interfaces';

@IonicPage()
@Component({
  selector: 'page-special-drinks',
  templateUrl: 'special-drinks.html',
})
export class SpecialDrinks {
  currentPage: any;

  menuFoodsRef$: Observable<MenuFoods[]>;
  

  constructor(private popoverCtrl:PopoverController, private service: MenuService,private app: App, public navCtrl: NavController, public navParams: NavParams) {
    this.currentPage = this.navParams.get('page');
    
  }

  ionViewDidLoad() {
    this.menuFoodsRef$ = this.service.getMenuFoodsRef(this.currentPage).snapshotChanges()
    .map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    });
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
    
          this.menuFoodsRef$ = this.service.getMenuFoodsRef(this.currentPage).snapshotChanges()
          .map(changes => {
            return changes.map(c => ({
              key: c.payload.key, ...c.payload.val()
            }))
          });
    
          this.menuFoodsRef$ = this.menuFoodsRef$.map((foods: MenuFoods[]) => {
            return foods.filter((food: MenuFoods) => {
              if (selectedValue === food.type) {
                 return (food.type);
              }
              
              if (selectedValue === undefined) {
                return this.menuFoodsRef$;
              }
              
            });      
          });  
        })
      }

 

}