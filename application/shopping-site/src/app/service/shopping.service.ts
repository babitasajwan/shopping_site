import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstant } from 'src/app/app.constant';
import { IlistItems } from '../model/list.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  noOfItem: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  cartDetails: IlistItems[] = [];

  constructor(private httpClient: HttpClient) { }

  public getShoppingItem() {
    return this.httpClient.get(AppConstant.SHOP_URL);
  }

  public addCartItem(item: IlistItems) {
    this.cartDetails.push(item);
    if (this.cartDetails.length) {
      this.noOfItem.next(this.cartDetails.length);
    }
  }
  public setCartDetails(itemlist: IlistItems[]) {
    this.cartDetails = itemlist;
  }
}
