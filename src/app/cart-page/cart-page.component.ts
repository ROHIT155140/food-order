import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../services/food/Cart';
import { carditem } from '../shared/models/carditem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!:Cart ;

  constructor( private cartService: CartService) { // after design this page i will remove it
    
    this.setCart();
   }

  ngOnInit(): void {
  
  }
  setCart(){
    this.cart = this.cartService.getCart();
  }
  removeFormetCart(cartItem:carditem){
    this.cartService.removeFromCart(carditem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:carditem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    

  }

}
