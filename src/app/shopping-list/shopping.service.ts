import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  ingredients:Ingredients[]=[new Ingredients('Apple',5),new Ingredients('Orange',6),new Ingredients('Tomato',9),new Ingredients('Pineapple',4)]
  ingredientSubject=new Subject<number>();
  ingredientChanged=new Subject<Ingredients[]>()
  constructor() { }
  getIngredients(){
    return this.ingredients.slice()
  }
  getIngredient(index:number){
    return this.ingredients[index]
  }
  add(ingredeints:Ingredients[]){
    this.ingredients.push(...ingredeints)
    this.ingredientChanged.next(this.ingredients.slice())
  }
  addingredients(ingredeints:Ingredients[]){
    console.log(ingredeints);  
    // for (let ingre of ingredeints){
    //   this.add(ingre)
    // }
    this.ingredients.push(...ingredeints)
    this.ingredientChanged.next(this.ingredients.slice())
  }
  updateIngredeints(index:number,newingredeints:Ingredients){
    this.ingredients[index] = newingredeints
    console.log(this.ingredients[index]);
    
  this.ingredientChanged.next(this.ingredients.slice())
  }
  deleteIngredeints(index:number){
    this.ingredients.splice(index,1)
    this.ingredientChanged.next(this.ingredients.slice())
  }
}
