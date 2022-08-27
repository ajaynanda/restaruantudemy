import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit,Output,EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Receipe } from '../receipes/receipe-list/receipe.model';
import { ReceipeService } from '../receipes/receipe-list/receipe.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  subs: Subscription = new  Subscription;
@Output() loadedfeature=new EventEmitter<string>()
  authenticated: boolean=false;
  constructor(private dataService:DataStorageService,private recipeService:ReceipeService,private authService:AuthService) { }

  ngOnInit(): void {
   this.subs =  this.authService.user.subscribe((user)=>{
 this.authenticated= !user? false:true
    })
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }
onSelect(feature:any){
  this.loadedfeature.emit(feature)
}
save(){
this.dataService.storeRecipe().subscribe((res)=>{
  console.log(res);
  
},(err=>{
  console.log(err);
  
}))
}
fetch(){
  this.dataService.fetchRecipe().subscribe()
}
logout(){
  this.authService.logout()
}
}
