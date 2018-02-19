import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-drinks-tab',
  templateUrl: 'drinks-tab.html'
})

export class DrinksTab {

  tab1Root: string;
  tab2Root: string;
  currentPage = {
    page: 'Drinks'
  };

  currentPage2 = {
    page: 'SpecialDrinks'
  };

  constructor() {
    
    this.tab1Root = "Drinks";
    this.tab2Root = "SpecialDrinks";
     
  }

  
    

}
