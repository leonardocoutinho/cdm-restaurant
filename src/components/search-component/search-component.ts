import { Component, Input } from '@angular/core';
import { MenuFoods } from '../../models/interfaces';
import { MenuService } from '../../providers/menu-service/menu-service';
import { NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'search-component',
  templateUrl: 'search-component.html'
})
export class SearchComponent{
  @Input() currentPage: any;
  menuFoodsRef$: Observable<MenuFoods[]>;

  constructor(private navParams: NavParams, private service: MenuService) {
  }

  searchFood(ev: any) {
    this.menuFoodsRef$ = this.service.getMenuFoodsRef(this.currentPage).snapshotChanges()
    .map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    });
    
      const search = ev.target.value;
            
      if(search && search.trim() != '') {
        this.menuFoodsRef$ = this.menuFoodsRef$.map((foods: MenuFoods[]) => {
          return foods.filter((food: MenuFoods) => {
            return (food.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1);
            
          });
          
        })
      
        
      } else {
        this.menuFoodsRef$ = null;
      }
  }

}
