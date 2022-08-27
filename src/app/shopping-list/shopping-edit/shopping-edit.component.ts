import { Component, OnInit, Output,EventEmitter, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredients } from 'src/app/shared/ingredients.model';import { ShoppingService } from '../shopping.service';
;
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: []
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  // @ViewChild ('name') nameref!:ElementRef 
  // @ViewChild ('amount') amountref!:ElementRef 
  // @Output() ingredientCreated=new EventEmitter<Ingredients>()
  @ViewChild('form') form!:NgForm
  subcription!:Subscription
  editItem!: Ingredients;
  editMode:boolean=false
  editIndex!: number;
  constructor(private shop:ShoppingService) { }

  ngOnInit(): void {
this.subcription=this.shop.ingredientSubject.subscribe((index:number)=>{ 
  this.editMode=true
  this.editIndex=index
    this.editItem =   this.shop.getIngredient(index)
    this.form.setValue({
      name:this.editItem.name,
      amount:this.editItem.amount
    })

})
  }
onAdditem(form:NgForm){
  // const name = this.nameref.nativeElement.value
  // const amount =this.amountref.nativeElement.value
  const value=form.value
   const newIngredient  = new Ingredients(value.name,value.amount)
   if(this.editMode){
    this.shop.updateIngredeints(this.editIndex,newIngredient)
    this.editMode=false
   }else{
    this.shop.add([newIngredient])
   }
  // this.ingredientCreated.emit(newIngredient)
 this.form.reset()
}
 
ngOnDestroy(): void {
  this.subcription.unsubscribe()
}
clear(){
  this.form.reset()
  this.editMode=false
}
Delete(){ 
  this.shop.deleteIngredeints(this.editIndex)
 this.clear()
}
}
