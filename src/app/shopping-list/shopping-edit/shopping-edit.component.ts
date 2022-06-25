import { Component, OnInit, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';;
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild ('name') nameref!:ElementRef 
  @ViewChild ('amount') amountref!:ElementRef 
  @Output() ingredientCreated=new EventEmitter<Ingredients>()
  constructor() { }

  ngOnInit(): void {
  }
onAdditem(){
  const name = this.nameref.nativeElement.value
  const amount =this.amountref.nativeElement.value
  const newIngredient  = new Ingredients(name,amount)
  this.ingredientCreated.emit(newIngredient)
}
}
