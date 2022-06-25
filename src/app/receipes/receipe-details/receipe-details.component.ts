import { Component, Input, OnInit } from '@angular/core';
import { Receipe } from '../receipe-list/receipe.model';

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
@Input() recipeData:any=Receipe


  constructor() { }

  ngOnInit(): void {
    
  }

}
