import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingredients[]=[new Ingredients('Apple','5'),new Ingredients('Orange','6'),new Ingredients('Tomato','9'),new Ingredients('Pineapple','4')]
  constructor() { }

  ngOnInit(): void {
  }
ingadded(product:Ingredients){
  this.ingredients.push(product)
}
}
