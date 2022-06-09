import { carditem } from "src/app/shared/models/carditem";

export class Cart{
    items : carditem[]= [];

    get totalPrice():number{
        let totalPrice = 0;
        this.items.forEach(item => {
            totalPrice += item.price;
        });
        return totalPrice;
    }
}