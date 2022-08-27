import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: []
})
export class ShoppingListComponent implements OnInit ,OnDestroy{
  subscription!:Subscription
  ingredients!:Ingredients[]
// ingredients:Ingredients[]=[new Ingredients('Apple','5'),new Ingredients('Orange','6'),new Ingredients('Tomato','9'),new Ingredients('Pineapple','4')]
  constructor(private shop:ShoppingService) { }

  ngOnInit(): void {
    this.ingredients=this.shop.getIngredients()
    this.subscription=this.shop.ingredientChanged.subscribe((ingredeints:Ingredients[])=>{
      this.ingredients=ingredeints
    })
  }
// ingadded(product:Ingredients){
 
// }
onEditItem(index:number){
  this.shop.ingredientSubject.next(index)
}
ngOnDestroy(): void {
  this.subscription.unsubscribe()
}
}
