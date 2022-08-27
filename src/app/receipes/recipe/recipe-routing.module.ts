import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/auth/auth.guard";
import { ReceipeDetailsComponent } from "../receipe-details/receipe-details.component";
import { ReceipeEditComponent } from "../receipe-edit/receipe-edit.component";
import { RecipeResolverService } from "../receipe-list/receipe-item/recipe-resolver.service";
import { ReceipesComponent } from "../receipes.component";
import { StartReceipeComponent } from "../start-receipe/start-receipe.component";
const route : Routes = [
    {
        path:'',
        component:ReceipesComponent,
        canActivate:[AuthGuard],
        children:[
          {
            path:'new',
            component:ReceipeEditComponent
           },
           {
            path:'',
            component:StartReceipeComponent
          },
          {
            path:':id',
            component:ReceipeDetailsComponent,
            resolve:[RecipeResolverService]
          }, 
         {
          path:':id/edit',
          component:ReceipeEditComponent,
          resolve:[RecipeResolverService]
         }      
        ]  
}]

   
    @NgModule({
        imports: [RouterModule.forChild(route)],
        exports: [RouterModule]
      })
      export class RecipeRoutingModule{}