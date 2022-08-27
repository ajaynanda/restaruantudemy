import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { Receipe } from './receipe.model';

@Injectable({
  providedIn: 'root'
})
export class ReceipeService implements OnInit {
  // recipeSelected = new EventEmitter<Receipe>()
  // recipeSelected = new Subject<Receipe>()
  reciepeAdded=new Subject<Receipe[]>()
  // private recipe: Receipe[] = [
    // new Receipe('Burger','Fat Burger with tasty mayonise','https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=',[new Ingredients('Buns',2),new Ingredients('Meat',3)]),
    //  new Receipe('Ghee Roast Dosa', 'The Tasty dosa with ghee', 'https://pipingpotcurry.com/wp-content/uploads/2020/11/Dosa-recipe-plain-sada-dosa-Piping-Pot-Curry.jpg',[new Ingredients('Ghee',2),new Ingredients('Rice powder',4)]), 
    //  new Receipe('Pizza', 'Pizza with tomato flavours', 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVwcGVyb25pJTIwcGl6emF8ZW58MHx8MHx8&w=1000&q=80',[new Ingredients('Atta',2),new Ingredients('cashew',10)])]
   private recipe:Receipe[]=[]
  constructor(private shop:ShoppingService) { }
  ngOnInit(): void {

  }
  setRecipe(recipes:Receipe[]){
    console.log(recipes);
    
    this.recipe=recipes
    this.reciepeAdded.next(this.recipe.slice())
  }
  getReceipe() {
    console.log(this.recipe);
    
    return this.recipe.slice()
  }
  getReceipeByID(id:number){
    return this.recipe[id]
  }
  addIngredientstoshoppingList(ingredeints:Ingredients[]){
    this.shop.addingredients(ingredeints)
  }
  addReceipe(newReceipe:Receipe){
    this.recipe.push(newReceipe)
    this.reciepeAdded.next(this.recipe.slice())
  }
  updateReceipe(index:number,update:Receipe){
    this.recipe[index]=update
    this.reciepeAdded.next(this.recipe.slice())
  }
  deleteReciepe(index:number){
    this.recipe.splice(index,1)
    this.reciepeAdded.next(this.recipe.slice())
  }
}
