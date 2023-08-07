import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Registration } from './Models/registration.model';
import { LoginModel } from './Models/registration.model';
import { Route, Router } from '@angular/router';
import sampleUserData from '../testDatas/userData.json';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'localhost:8080';

  currentUser = {};

  constructor(private http: HttpClient, private router: Router) {}

  private userDataSubject = new BehaviorSubject<any>(null);

  setUserData(userData: any) {
    this.userDataSubject.next(userData);
  }

  getUserData() {
    return this.userDataSubject.asObservable();
  }

  private createHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      // You can add authorization headers here if needed
    });
  }

  registerUser(user: Registration): Observable<any> {
    const url = `${this.baseUrl}/register`;
    const headers = this.createHeaders();
    return this.http.post(url, user, { headers });
  }

  //https://stackblitz.com/edit/angular-7-jwt-authentication-example?file=app%2F_guards%2Fauth.guard.ts

  //https://www.positronx.io/angular-jwt-user-authentication-tutorial/

  loginUser(loginDetails: LoginModel): Observable<any> {
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

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  demoSignIn(user: LoginModel) {
    localStorage.setItem('access_token', sampleUserData.fake_token);
    localStorage.setItem('currentUser', JSON.stringify(sampleUserData));
    this.setUserData(sampleUserData);
    //this.getUserProfile(res._id).subscribe((res) => {
    this.currentUser = sampleUserData;
    this.router.navigate(['/studymaterials']);

    //});
  }

  demoSignUp(user: Registration) {
    localStorage.setItem('access_token', sampleUserData.fake_token);
    localStorage.setItem('currentUser', JSON.stringify(sampleUserData));
    this.setUserData(sampleUserData);
    //this.getUserProfile(res._id).subscribe((res) => {
    this.currentUser = sampleUserData;
    this.router.navigate(['/studymaterials']);

    //});
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    let removeCurrentUser = localStorage.removeItem('currentUser');
    this.setUserData(null);
    if (removeToken == null && removeCurrentUser == null) {
      this.router.navigate(['']);
    }
  }
}
