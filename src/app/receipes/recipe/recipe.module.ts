import { NgModule } from '@angular/core';
import { ReceipeDetailsComponent } from '../receipe-details/receipe-details.component';
import { ReceipeItemComponent } from '../receipe-list/receipe-item/receipe-item.component';
import { ReceipeListComponent } from '../receipe-list/receipe-list.component';
import { ReceipesComponent } from '../receipes.component';
import { StartReceipeComponent } from '../start-receipe/start-receipe.component';
import { ReceipeEditComponent } from '../receipe-edit/receipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecipeRoutingModule } from './recipe-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ReceipesComponent,
    ReceipeListComponent,
    ReceipeDetailsComponent,
    ReceipeItemComponent,
    StartReceipeComponent,
    ReceipeEditComponent,
  ],
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RecipeRoutingModule,
    SharedModule,
    NgbModule
  ],
  exports:[
    ReceipesComponent,
    ReceipeListComponent,
    ReceipeDetailsComponent,
    ReceipeItemComponent,
    StartReceipeComponent,
    ReceipeEditComponent,
  ]
})
export class RecipeModule { }
