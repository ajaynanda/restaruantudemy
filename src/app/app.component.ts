import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping';
  fetaureLoaded='recipe'
  onNavigate(feature:any){
    this.fetaureLoaded=feature
  }
}
