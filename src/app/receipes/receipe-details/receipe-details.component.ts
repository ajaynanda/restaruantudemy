import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Receipe } from '../receipe-list/receipe.model';
import { ReceipeService } from '../receipe-list/receipe.service';

@Component({
  selector: 'app-receipe-details',
  templateUrl: './receipe-details.component.html',
  styles: [`
  .onload{
    text-align:center;
    margin: 150px auto ;
  }`]
})
export class ReceipeDetailsComponent implements OnInit {
  recipeData:any=Receipe
  index:any;
// @Input() recipeData:any=Receipe

  constructor(private recipe:ReceipeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    // this.index = this.route.snapshot.params['id']
    this.route.params.subscribe((param:Params)=>{
      this.index = +param['id']
      this.recipeData = this.recipe.getReceipeByID(this.index)
    })
 
  
  }
  addtoShoppingList(data:[]){ 
    this.recipe.addIngredientstoshoppingList(data)
  }
  onEdit(){
// this.router.navigate(['edit'],{relativeTo:this.route})
this.router.navigate(['../',this.index,'edit'],{relativeTo:this.route})
}
onDelete(){
  this.recipe.deleteReciepe(this.index)
  this.router.navigate(['../'],{relativeTo:this.route})
}
}
