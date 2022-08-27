import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from '../Loading/loading-spinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.component';
import { PlaceholderDirective } from '../placeholder/placeholder.directive';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [LoadingSpinnerComponent,AlertComponent,PlaceholderDirective,DropdownDirective],
  imports: [
    CommonModule
    
  ],
  exports:[LoadingSpinnerComponent,AlertComponent,CommonModule,PlaceholderDirective,DropdownDirective],
  entryComponents:[AlertComponent]
})
export class SharedModule { }
