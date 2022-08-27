import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Receipe } from './receipe-list/receipe.model';
import { ReceipeService } from './receipe-list/receipe.service';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css']
})
export class ReceipesComponent implements OnInit {
  // Recipe!:Receipe
  //  OnSelectedRecipes: Boolean=false
  constructor(private receipe:ReceipeService) { }

  ngOnInit(): void {
    // this.receipe.recipeSelected.subscribe((rec)=>{
    //   this.Recipe=rec
    //   this.OnSelectedRecipes=true
    // })
  }
  // OnSelectedRecipe(recipe:any){
  //   this.Recipe=recipe
  //   console.log(this.Recipe);
  //   this.OnSelectedRecipes=true
  // }
}
