import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';


import { IlistItems } from '../model/list.model';
import { ShoppingService } from '../service/shopping.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit, OnDestroy {

  private shoppingList: IlistItems[] = [];
  private shoppingSubscription$: Subscription;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.shoppingSubscription$ = this.shoppingService.getShoppingItem().subscribe((list: any) => {
      if (list && list.data && list.data.length) {
        this.shoppingList = list.data;
      }
    });
  }

  private addToCart(item: IlistItems): void {
    this.shoppingService.addCartItem(item);
  }

  ngOnDestroy() {
    this.shoppingSubscription$.unsubscribe();
  }

}
