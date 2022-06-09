import { Injectable } from '@angular/core';
import { Foods } from '../shared/models/food';
import { Cart } from './food/Cart';
import {carditem } from '../shared/models/carditem'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart = new Cart();
  // cardItem:string[]=[];

  addToCart(food:Foods):void{

    let cardItem= this.cart.items.find(item => item.food.id === food.id)
    if(cardItem){
      this.changeQuantity(food.id, cardItem.quantity +1)
      return;
    }
    this.cart.items.push(new carditem(food));
  }
  removeFromCart(foodId:number):void{
    this.cart.items = this.cart.items.filter(item =>item.food.id != foodId);
    return
  }
  changeQuantity(quantity:number, foodId:number): void{
    let cardItem = this.cart.items.find(item =>item.food.id === foodId);
    if(!cardItem) return
    cardItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }

  
}
