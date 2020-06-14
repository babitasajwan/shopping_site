import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstant } from 'src/app/app.constant';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private httpClient: HttpClient) { }

  public getShoppingItem() {
    return this.httpClient.get(AppConstant.SHOP_URL);
  }
}
