import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RecipeModule } from './receipes/recipe/recipe.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { AuthModule } from './auth/auth.module';
@NgModule({
  declarations: [
    AppComponent,
    // ReceipesComponent,
    // ReceipeListComponent,
    // ReceipeDetailsComponent,
    // ReceipeItemComponent,
    // ShoppingListComponent,
    HeaderComponent,
    // ShoppingEditComponent,
    // DropdownDirective,
    // StartReceipeComponent,
    // ReceipeEditComponent,
    // LoadingSpinnerComponent,
    // AlertComponent,
    // PlaceholderDirective,
    
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    NgbModule
  ],

  bootstrap: [AppComponent]
  
})
export class AppModule { }
