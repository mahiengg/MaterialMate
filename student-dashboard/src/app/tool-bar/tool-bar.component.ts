import { Component, Input, ViewChild } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatMenuTrigger, MatMenuModule} from '@angular/material/menu';
import { ProfileDialog } from '../profileDialog.component';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent {

  @Input() currentUser : any;
  @ViewChild('menuTrigger')
  menuTrigger!: MatMenuTrigger;


  userName:any = "";

 

  constructor(private apiService : ApiService, private dialog: MatDialog) {}
currentUser2:any = '';

  ngOnInit(): void {

    console.log(this.currentUser)
   
    this.currentUser2 = localStorage.getItem('currentUser');
    this.userName = JSON.parse(this.currentUser2).userName

    
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
