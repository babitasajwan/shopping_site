import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/service/shopping.service';
import { IlistItems } from 'src/app/model/list.model';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent implements OnInit {
  private cartList: IlistItems[] = [];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    const itemList: IlistItems[] = this.shoppingService.cartDetails;
    for (const item of itemList) {
      if (!item.selectedQuantity) {
        item.selectedQuantity = 1;
        item.subtotal = parseInt(item.price, 10);
      }
      this.cartList.push(item);
    }
  }
  removeItem(id: number) {
    const indexNumber = this.cartList.findIndex((list) => list.id === id);
    this.cartList.splice(indexNumber, 1);
    this.shoppingService.noOfItem.next(this.cartList.length);
    this.shoppingService.setCartDetails(this.cartList);
  }
  getSubtotal(item: IlistItems) {
    item.subtotal = parseInt(item.price, 10) * item.selectedQuantity;
  }

}
