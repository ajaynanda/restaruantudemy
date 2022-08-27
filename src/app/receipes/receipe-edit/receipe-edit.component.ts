import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Receipe } from '../receipe-list/receipe.model';
import {ReceipeService} from '../receipe-list/receipe.service'
@Component({
  selector: 'app-receipe-edit',
  templateUrl: './receipe-edit.component.html',
  styles: [`
    input.ng-invalid.ng-touched, textarea.ng-invalid.ng-touched{
      border:1px solid red
    }
  `]
})
export class ReceipeEditComponent implements OnInit {
  id: any;
  data:any
  editmode=false
  receipeForm:any=FormGroup ;
  ingredients=new FormArray([])
  constructor(private route:ActivatedRoute,private service:ReceipeService,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id=params['id']
      this.editmode = params['id']!=null
      console.log(this.editmode);
      
    })
    if(this.editmode){
      this.data = this.service.getReceipeByID(this.id)
      console.log(this.data);
     
    }
    this.init()
  }
  submit(data:Receipe){
    console.log(data);
    if(this.editmode){
      this.service.updateReceipe(this.id,data)
      this.router.navigate(['../'],{relativeTo:this.route})
    }else{
      this.service.addReceipe(data)
      this.router.navigate(['../'],{relativeTo:this.route})
    
    }
  }
  private init(){
    if(this.editmode){
      this.receipeForm=new FormGroup({
        name:new FormControl(this.data.name,Validators.required),
        description:new FormControl(this.data.description,Validators.required),
        Imagepath:new FormControl(this.data.Imagepath,Validators.required),
        ingredients:this.ingredients
      })
      for(let ingre of this.data.ingredients){
        this.ingredients.push(
          new FormGroup({
            name:new FormControl(ingre.name,Validators.required),
            amount:new FormControl(ingre.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
          })
        )
      }
    }else{
      this.receipeForm=new FormGroup({
        name:new FormControl('',Validators.required),
        Imagepath:new FormControl('',Validators.required),
        description:new FormControl('',Validators.required),
        ingredients:this.ingredients
      })
    }
 
  }
  addingre(){
    (<FormArray>this.receipeForm.get('ingredients')).push(
      new FormGroup({
        name:new FormControl('',Validators.required),
        amount:new FormControl('',[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
 

  }
  close(i:number){
    this.ingredients.removeAt(i)
  }
  cancel(){
    this.router.navigate(['../'],{relativeTo:this.route})
  }
}
