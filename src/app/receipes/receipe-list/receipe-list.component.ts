import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Receipe } from './receipe.model';
import { ReceipeService } from './receipe.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
//  @Output() recipeWasSelected=new EventEmitter<Receipe>()
// recipe:Receipe[]=[new Receipe('Testing Receipe','this is of testing receipe','https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'),new Receipe('Testing selected Receipe','this is of testing receipe','https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'),new Receipe('selected Receipe','this is of testing receipe','https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg')]
  constructor(private receipe:ReceipeService ,private router:Router,private route:ActivatedRoute) { }
recipe:Receipe[]=[]
  ngOnInit(): void {
    this.recipe=this.receipe.getReceipe()
    this.receipe.reciepeAdded.subscribe((Reciepe)=>{
      this.recipe=Reciepe
    })
  }
// selected(reci:Receipe){
// this.recipeWasSelected.emit(reci)
// }
onNew(){
  this.router.navigate(['new'],{relativeTo:this.route})
}
}
