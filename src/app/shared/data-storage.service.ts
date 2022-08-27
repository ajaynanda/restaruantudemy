import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Receipe } from '../receipes/receipe-list/receipe.model';
import { ReceipeService } from '../receipes/receipe-list/receipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private receipeService: ReceipeService, private http: HttpClient, private authService: AuthService) { }

  storeRecipe() {
    const Recipe = this.receipeService.getReceipe()
    console.log(Recipe)
    return this.http.put('https://restuarant-a8819-default-rtdb.firebaseio.com/recipe.json', Recipe)
  }
  //   fetchRecipe(){
  //  return    this.http.get<Receipe[]>('https://restuarant-a8819-default-rtdb.firebaseio.com/recipe.json').pipe(map(recipes=>{
  //   console.log("hello");

  //   console.log(recipes);
  //     return recipes.map(recipe=>({ ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }))
  // }),tap((recipes:any)=>{
  //   console.log(recipes);
  //   this.receipeService.setRecipe(recipes)
  // })   )
  //   }
  // fetchRecipe() {
  //   return this.authService.user.pipe(take(1), exhaustMap(user => {
  //     return this.http.get<Receipe[]>('https://restuarant-a8819-default-rtdb.firebaseio.com/recipe.json',{
  //       params:new HttpParams().set('auth',user.token)
  //     })
  //   }), map(recipes => {
  //     return recipes.map(recipe => ({ ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }))
  //   }), tap((recipes: any) => {
  //     console.log(recipes);
  //     this.receipeService.setRecipe(recipes)
  //   }))
  // }
  fetchRecipe() {

    return this.http.get<Receipe[]>('https://restuarant-a8819-default-rtdb.firebaseio.com/recipe.json').pipe(
      (map(recipes => {
        return recipes.map(recipe => ({ ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }))
      })),
      tap((recipes: any) => {
        console.log(recipes);
        this.receipeService.setRecipe(recipes)
      }))

  }
}
