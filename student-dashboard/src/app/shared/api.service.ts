import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
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

  loginnnn(loginDetails: LoginModel) {
    this.loginUser(loginDetails).subscribe((res) => {
      console.log(res);
      localStorage.setItem('access_token', res.jwtToken);
      localStorage.setItem('currentUser', JSON.stringify(res));
      this.setUserData(res);
      //this.getUserProfile(res._id).subscribe((res) => {
      this.currentUser = res;
      this.router.navigate(['/studymaterials']);
    });
  }
  loginUser(loginDetails: LoginModel): Observable<any> {
    console.log(loginDetails);
    const url = `http://localhost:8080/authenticate`;
    const headers = this.createHeaders();
    return this.http.post(url, loginDetails).pipe(
      tap((res) => {
        console.log(res);
        return res;
        //this.router.navigate(['/studentmaterials']);
      })
    );
  }

  signIn(user: LoginModel) {
    return this.http.post<any>(`api/signin`, user).subscribe((res: any) => {
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

  //api calls for userMaterials

  getUserPdfMaterials(): Observable<any> {
    const url = `http://localhost:8080/materials`;
    return this.http.get(url).pipe(
      tap((res) => {
        return res;
      })
    );
  }

  //api calls for User tasks

  addUserTask(task:any){
    console.log(task);
    const url = `http://localhost:8080/task`;
    const headers = this.createHeaders();
    return this.http.post(url, task, { headers });
  }

  updateTaskDate(task:any, changeDate :any){
    const url = `http://localhost:8081/updateDate`;
  const params = new HttpParams()
  .set('taskId', task.id)
  .set('date', changeDate);
  return this.http.delete(url, { params }).pipe(
    tap((res) => {
      return res;
    })
  );

  }



  getTaskByDate(date :any){
    const url = `http://localhost:8080/usertask`;
    const params = new HttpParams().set('date',date);
    return this.http.get(url, { params }).pipe(
      tap((res) => {
        return res;
      })
    );
  }

  deleteUserTask(task: any) {
    const url = `http://localhost:8081/deleteTask`;
    const params = new HttpParams().set('id', task.id);

    return this.http.delete(url, { params }).pipe(
      tap((res) => {
        return res;
      })
    );
  }
}
