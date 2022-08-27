import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './auth/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // user=new Subject<User>()
  user = new BehaviorSubject<any>(null);
  tokenExpirationTimer: any;
  constructor(private http: HttpClient,private router:Router) { }
  // signUp(email:string,password:string){
  //   return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBoxqKU8G5WcQm8AQ7rFAySE4AZKargWGs',{
  //       email:email,
  //       password:password,
  //       returnSecureToken:true
  //     }).pipe(catchError(err=>{
  //       let errorMessage="An Unknown error occured"
  //       if(!err.error || !err.error.error){
  //         return throwError(errorMessage)
  //       }
  //       switch(err.error.error.message){
  //         case 'EMAIL_EXISTS':
  //           errorMessage='This email already exists'       
  //       }
  //       return throwError(errorMessage)
  //     }))
  //   }
  signUp(email: string, password: string) {
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIKey, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError), tap((response: any) => {
      this.handleAuthentication(response.email, response.localId, response.idToken, response.expiresIn)
      // const expirationDate=new Date(new Date().getTime() + +response.expiresIn*1000)
      // const user = new User(response.email,response.localId,response.idToken,expirationDate)
      // this.user.next(user)
    }))
  }
  loginIn(email: string, password: string) {
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIKey, {
      email: email, password: password, returnSecureToken: true
    }).pipe(catchError(this.handleError), tap((response: any) => {
      this.handleAuthentication(response.email, response.localId, response.idToken, response.expiresIn)
    }))
    // let errorMessage="An unknown error occured"
    // if(!err.error || !err.error.error){
    //   return throwError(errorMessage)
    // }
    // switch(err.error.error.message){
    //   case 'INVALID_PASSWORD':
    //     errorMessage="Password Entered is INVALID"
    // }
    // return throwError(errorMessage)  
  }
  private handleAuthentication(email: string, id: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000)
    const user = new User(email, id, token, expirationDate)
    this.user.next(user)
    this.autoLogout(expiresIn * 1000)
    localStorage.setItem('userData',JSON.stringify(user))
  }
  private handleError(err: HttpErrorResponse) {
    console.log(err);
    
    let errorMessage = "An unknown error occured"
    if (!err.error || !err.error.error) {
      return throwError(errorMessage)
    }
    switch (err.error.error.message) {
      case 'INVALID_PASSWORD':
        errorMessage = "Password Entered is INVALID"
        break;
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists'
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.':
        errorMessage = 'Too many attempts...Try After sometime'
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = "Email not Found";
        break;
    }
    return throwError(errorMessage)
  }
  logout(){
    this.user.next(null)
    localStorage.removeItem('userData')
    this.router.navigate(['/auth'])
    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer)
    }
    this.tokenExpirationTimer=null
  }
  autoLogout(expirationDuration:number){
    console.log(expirationDuration);
    
    this.tokenExpirationTimer=setTimeout(()=>{
        this.logout()
    },expirationDuration)
  }
  autoLogin(){
    const userData = JSON.parse(localStorage.getItem('userData') || '{}' ) 
    console.log(userData)
    if(!userData) return
    else{
      const loadedUser = new User(userData.email,userData.localId,userData._token,new Date(userData._tokenExpirationDate))
      if(loadedUser.token){
        this.user.next(loadedUser)
        const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime()
        this.autoLogout(expirationDuration)
      }
    }
  
  }
}
