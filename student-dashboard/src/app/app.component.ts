import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'student-dashboard';
  opened = true;

  currentUser:any = '';
  userName:any = "";

  ngOnInit(): void {
    console.log("app-renderedd")
    this.currentUser = localStorage.getItem('currentUser');
    this.userName = JSON.parse(this.currentUser).userName
}
}
