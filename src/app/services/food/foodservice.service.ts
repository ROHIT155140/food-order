import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { tag} from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

  constructor( ) { }

getFoodById(id:number):Foods{

  return this.getAll().find(food =>food.id == id)!;
}



  getAllFoodByTag(tag:string) :Foods[]{ 
if(tag== 'All')
return this.getAll()
else
return this.getAll().filter( food =>{
  food.tags?.includes(tag);
})
  }

getAllTag():tag []{
  return[
    {name: 'All', count:14},
    {name: 'FastFood', count:4},
    {name: 'Pizza', count:2},
    {name: 'Lunch', count:3},
    {name: 'SlowFood', count:2},
    {name: 'fry', count:1},
    {name: 'Soup', count:14},

  ];
}



  getAll():Foods[]{
    return[
      {
        id:1,
        name:'Pizza Pepperoni',
        cookTime:'10-20',
        price:10,
        favorite:true,
        origins:['italy','indian'],
        star:2.5,
        imageUrl:'/assets/food1.jpg',
        tags:['FastFood','Pizza','Lunch'],
        
      },
      {
        id:2,
        name:'berger',
        cookTime:'10-30',
        price:30,
        favorite:false,
        origins:['china'],
        star:3,
        imageUrl:'/assets/food2.jpg',
        tags:['Pizza','Lunch'],
        
      },
      {
        id:3,
        name:'Cheeze Memo',
        cookTime:'10-50',
        price:10,
        favorite:false,
        origins:['indian'],
        star:4,
        imageUrl:'/assets/food3.jpg',
        tags:['Pizza','Lunch','MOMO'],
        
      },
      {
        id:4,
        name:'Finger chipps',
        cookTime:'10-20',
        price:60,
        favorite:false,
        origins:['south indian'],
        star:4.5,
        imageUrl:'/assets/food4.jpg',
        tags:['FastFood'],
        
      },
      {
        id:5,
        name:'Finger chipps',
        cookTime:'10-20',
        price:60,
        favorite:false,
        origins:['south indian'],
        star:4.5,
        imageUrl:'/assets/food5.jpg',
        tags:['FastFood','Pizza','Lunch','finger Chipps'],
        
      },
      {
        id:6,
        name:'Finger chipps',
        cookTime:'10-20',
        price:60,
        favorite:true,
        origins:['south indian'],
        star:3.5,
        imageUrl:'/assets/food6.jpg',
        tags:['Pizza','Lunch','finger Chipps'],
        
      },
      {
        id:7,
        name:'Finger chipps',
        cookTime:'10-20',
        price:60,
        favorite:false,
        origins:['south indian'],
        star:2.5,
        imageUrl:'/assets/food7.jpg',
        tags:['FastFood','Pizza','Lunch','finger Chipps'],
        
      },
      {
        id:8,
        name:'Finger chipps',
        cookTime:'10-20',
        price:60,
        favorite:true,
        origins:['south indian'],
        star:1.0,
        imageUrl:'/assets/food8.jpg',
        tags:['FastFood','Pizza','Lunch','finger Chipps'],
        
      },
      {
        id:9,
        name:'Finger chipps',
        cookTime:'10-20',
        price:60,
        favorite:false,
        origins:['south indian'],
        star:4.0,
        imageUrl:'/assets/food9.jpg',
        tags:['Pizza','Lunch','finger Chipps'],
        
      },
      {
        id:10,
        name:'Finger chipps',
        cookTime:'10-20',
        price:60,
        favorite:true,
        origins:['south indian'],
        star:3.0,
        imageUrl:'/assets/food10.jpg',
        tags:['FastFood','Pizza','Lunch','finger Chipps'],
        
      },
    ];
  }
}
