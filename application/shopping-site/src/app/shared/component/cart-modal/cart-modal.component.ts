import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ShoppingService } from 'src/app/service/shopping.service';
import { IlistItems } from 'src/app/model/list.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CartModalComponent implements OnInit {
  private cartList: IlistItems[] = [];
  private totalPrice: number;

  constructor(private shoppingService: ShoppingService,
              public activeModal: NgbActiveModal) { }

  ngOnInit() {
    const itemList: IlistItems[] = this.shoppingService.cartDetails;
    for (const item of itemList) {
      if (!item.selectedQuantity) {
        item.selectedQuantity = 1;
        item.subtotal = parseInt(item.price, 10);
      }
      this.cartList.push(item);
      this.getTotalPrice();
    }
  }
  private getTotalPrice(): void {
    this.totalPrice = this.cartList.reduce((a, b) => {
      return b.subtotal == null ? a : a + b.subtotal;
  }, 0);
  }
  removeItem(id: number) {
    const indexNumber = this.cartList.findIndex((list) => list.id === id);
    this.cartList.splice(indexNumber, 1);
    this.shoppingService.noOfItem.next(this.cartList.length);
    this.shoppingService.setCartDetails(this.cartList);
    this.getTotalPrice();
  }
  getSubtotal(item: IlistItems) {
    item.subtotal = parseInt(item.price, 10) * item.selectedQuantity;
    this.getTotalPrice();
  }
  closeWindow() {
    this.activeModal.dismiss();
  }

}
