import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PlaceholderDirective } from 'src/app/placeholder/placeholder.directive';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  error: string='';
@ViewChild(PlaceholderDirective) alertHost!:PlaceholderDirective
  constructor(private authService:AuthService, private router:Router, private componentFactory:ComponentFactoryResolver) { }
isLogin=false
isLoading=false
  ngOnInit(): void {
  }
submit(data:any){
  this.isLoading=true
  let authObs:Observable<any>
  if(this.isLogin){
    // this.authService.loginIn(data.email,data.password).subscribe((res)=>{
    //   console.log(res);
    //   this.isLoading=false
    // },(err=>{
    //   console.log(err);
    //   this.error=err
    //     this.isLoading=false
    // }))
   authObs = this.authService.loginIn(data.email,data.password)
  }else{
    console.log(data);
    this.isLoading=true
    // this.authService.signUp(data.email,data.password).subscribe((res)=>{
    //   console.log(res);
    //   this.isLoading=false
    // },(err=>{ 
    //   this.isLoading=false
    //  this.error=err
    // }))
    authObs=this.authService.signUp(data.email,data.password)
  }
  authObs.subscribe((res)=>{
      console.log(res);
      this.isLoading=false
      this.router.navigate(['/recipe'])
    },(err=>{ 
      console.log(err);   
      this.isLoading=false
     this.error=err
     this.showErrorAlert(err)
    }))
}
private showErrorAlert(message:string){
  console.log(message);
  const alertComp = this.componentFactory.resolveComponentFactory(AlertComponent)
  const hostAlertViewContainer = this.alertHost.viewContainerRef
 const componentRef=  hostAlertViewContainer.createComponent(alertComp)
 componentRef.instance.message = message
}
}
