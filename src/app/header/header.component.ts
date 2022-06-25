import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
collapsed:Boolean=true
@Output() loadedfeature=new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {

  }
onSelect(feature:any){
  this.loadedfeature.emit(feature)
}
}
