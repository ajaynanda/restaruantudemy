import { Ingredients } from "src/app/shared/ingredients.model"

export class Receipe{
   name:String=''
    description:String=''
   Imagepath:String=''
   ingredients:Ingredients[];
   constructor(name:String,  description:String,Imagepath:String,ingredients:Ingredients[]){
    this.name=name,
    this.description=description,
    this.Imagepath=Imagepath,
    this.ingredients=ingredients
   }
}