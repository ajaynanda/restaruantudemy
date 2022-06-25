import { Component, OnInit } from '@angular/core';
import { Receipe } from './receipe-list/receipe.model';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css']
})
export class ReceipesComponent implements OnInit {
  Recipe:any=[]
  OnSelectedRecipes: Boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  OnSelectedRecipe(recipe:any){
    this.Recipe=recipe
    console.log(this.Recipe);
    this.OnSelectedRecipes=true
  }
}
