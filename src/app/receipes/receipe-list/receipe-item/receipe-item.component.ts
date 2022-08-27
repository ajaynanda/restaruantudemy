import { Component,  OnInit,Input, Output,EventEmitter } from '@angular/core';

import { Receipe } from '../receipe.model';
import { ReceipeService } from '../receipe.service';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
  @Input() recipe:any= Receipe

@Input() id:any 
// @Output() recipeSelected=new EventEmitter<void>()
  constructor(private receip:ReceipeService) { }

  ngOnInit(): void {
 
     this.receip.getReceipeByID(this.id)
  }
// onSelected(){
//   // this.recipeSelected.emit()
//   this.receip.recipeSelected.emit(this.recipe)
// }

}
