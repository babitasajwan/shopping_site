import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { ShoppingService } from '../shared/service/shopping.service';
import { IlistItems } from '../model/list.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit, OnDestroy {

  private shoppingList: IlistItems[] = [];
  private shoppingSubscription$: Subscription;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.shoppingSubscription$ = this.shoppingService.getShoppingItem().subscribe((list: any) => {
      if (list && list.data && list.data.length) {
        this.shoppingList = list.data;
        console.log(this.shoppingList);
      }
    });
  }

  ngOnDestroy() {
    this.shoppingSubscription$.unsubscribe();
  }

}
