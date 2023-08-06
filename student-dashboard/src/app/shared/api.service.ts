import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registration } from './Models/registration.model';
import { LoginModel } from './Models/registration.model';
import { Route, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'localhost:8080';

  currentUser = {};


  constructor(private http: HttpClient, private router : Router) {}

  private createHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      // You can add authorization headers here if needed
    });
  }

  registerUser(user:Registration): Observable<any> {
    const url = `${this.baseUrl}/register`;
    const headers = this.createHeaders();
    return this.http.post(url, user, { headers });
  }


  //https://stackblitz.com/edit/angular-7-jwt-authentication-example?file=app%2F_guards%2Fauth.guard.ts

  //https://www.positronx.io/angular-jwt-user-authentication-tutorial/

  loginUser(loginDetails:LoginModel): Observable<any> {
    console.log(loginDetails);
    const url = `${this.baseUrl}/login`;
    const headers = this.createHeaders();
    return this.http.post(url, loginDetails);
  }


  signIn(user: LoginModel) {
    return this.http
      .post<any>(`${this.baseUrl}/signin`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token);
        //this.getUserProfile(res._id).subscribe((res) => {
          this.currentUser = res;
          this.router.navigate(['/studentmaterials']);
        });
      //});
  }

   private res = {
     id:1,
     userName: "raja",
    token : "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYWphIiwiZXhwIjoxNjkxMTk3MzkyLCJpYXQiOjE2OTExOTM3OTJ9.dRfqOxfHoePmOzFv2AfSJ8DERjzKa4z8m7fDO-9Xm3U"
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }


  demosignIn(user: LoginModel) {
    
        localStorage.setItem('access_token', this.res.token);
        localStorage.setItem('currentUser', JSON.stringify(this.res));
        //this.getUserProfile(res._id).subscribe((res) => {
          this.currentUser = this.res;
          this.router.navigate(['/studymaterials']);
        
      //});
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    let removeCurrentUser = localStorage.removeItem('currentUser');
    if (removeToken == null && removeCurrentUser == null) {
      this.router.navigate(['']);
    }
  }
}
