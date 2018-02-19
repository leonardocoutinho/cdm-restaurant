import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuFoods } from '../../models/interfaces';
import { MenuService } from '../../providers/menu-service/menu-service';

@Component({
  selector: 'appetizer-component',
  templateUrl: 'appetizer-component.html'
})
export class AppetizerComponent implements OnInit {

  @Input() currentPage: string;
  menuFoodsRef$: Observable<MenuFoods[]>;
  constructor(private service: MenuService) {
   
  }

  ngOnInit() {
    this.menuFoodsRef$ = this.service.getMenuFood(this.currentPage);
  }

}
