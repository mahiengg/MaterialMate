import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-material-dialog',
  templateUrl: './create-material-dialog.component.html',
  styleUrls: ['./create-material-dialog.component.scss']
})
export class CreateMaterialDialogComponent {
  materialForm = new FormGroup({
    name: new FormControl(''),
    path: new FormControl(''),
    subject: new FormControl(''),
  });




  onSubmit(){
    
  }


}
