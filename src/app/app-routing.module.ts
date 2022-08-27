import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path:'',
    redirectTo:'/auth',
    pathMatch:'full'
  },
  {
    path:'recipe',
    loadChildren:() => import ('./receipes/recipe/recipe.module').then(x=>x.RecipeModule)
  },
  {
    path:'shopping',
    loadChildren:()=>import('./shopping-list/shopping-list.module').then(x=>x.ShoppingListModule)
  },
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(x=>x.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
