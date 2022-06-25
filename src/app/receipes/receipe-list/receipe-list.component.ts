import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Receipe } from './receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
 @Output() recipeWasSelected=new EventEmitter<Receipe>()
recipe:Receipe[]=[new Receipe('Testing Receipe','this is of testing receipe','https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'),new Receipe('Testing selected Receipe','this is of testing receipe','https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'),new Receipe('selected Receipe','this is of testing receipe','https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg')]
  constructor() { }

  ngOnInit(): void {
  }
selected(reci:Receipe){
this.recipeWasSelected.emit(reci)
}
}
