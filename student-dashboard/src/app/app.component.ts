import { Component, ViewChild } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { ApiService } from './shared/api.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfileDialog } from './profileDialog.component';
import { MatMenuTrigger } from '@angular/material/menu';

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
  @ViewChild('menuTrigger')
  menuTrigger!: MatMenuTrigger;
  constructor(private apiService : ApiService, private dialog: MatDialog) {}
  ngOnInit(): void {
    console.log("app-renderedd")
    this.currentUser = localStorage.getItem('currentUser');
    this.userName = JSON.parse(this.currentUser)?.userName
}

openAccount() {
  const dialogRef = this.dialog.open(ProfileDialog, {restoreFocus: false});

  // Manually restore focus to the menu trigger since the element that
  // opens the dialog won't be in the DOM any more when the dialog closes.
  dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
}

logout(){

  this.apiService.doLogout();

}
}
