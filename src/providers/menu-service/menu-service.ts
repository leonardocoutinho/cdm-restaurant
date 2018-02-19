import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { MenuFoods } from "../../models/interfaces";

@Injectable()
export class MenuService {

  dishDay: string = 'dish-day';

  constructor(private database: AngularFireDatabase) {
    
  }

  getMenuFood(pageName: string) {
    return this.database.list(`menu-foods/${pageName}`).snapshotChanges()
    .map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    })
  }

  getMenuFoodsRef(pageName: string){
    return this.database.list<MenuFoods>(`menu-foods/${pageName}`);
  }

   getDishOfTheDay() {
     return this.database.list<MenuFoods>(`menu-foods/${this.dishDay}`);
   }
    
  

}