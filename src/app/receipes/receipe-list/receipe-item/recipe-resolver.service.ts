import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "src/app/shared/data-storage.service";
import { Receipe } from "../receipe.model";
import { ReceipeService } from "../receipe.service";

@Injectable({providedIn:'root'})
export class RecipeResolverService implements Resolve<Receipe[]>{
constructor(private dataService:DataStorageService,private recipeService:ReceipeService){}
     resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        const recipe = this.recipeService.getReceipe()
        if(recipe.length == 0){
            return this.dataService.fetchRecipe()
        }else{
            return recipe
        }
       
     }
}