import { Foods } from "src/app/shared/models/food";

export class carditem{
    price: number = 0 ;
  static food: any;

    constructor(food:Foods){
        this.food=food;
    }
    food: Foods;
    quantity:number = 1;
    getPrice(): Number{
        return this.food.price*this.quantity;
    }
}