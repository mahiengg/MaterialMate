import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task-dialog',
  template: `
    <h5 mat-dialog-title>Create a task on  {{ data.item.taskDate | date: 'dd/MM/yyyy' }}</h5>
    <div mat-dialog-content>
      <textarea [(ngModel)]="textareaData" name="task"></textarea>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">No Thanks</button>
      <button mat-button [mat-dialog-close]="textareaData">Ok</button>
    </div>
  `,
  styles: [
    `
      textarea {
        background: #f1f1f1;
        border: none;
        height: 90px;
        width: 100%;
      }

      ::ng-deep {
        .mdc-dialog__content {
          flex-grow: 1;
          box-sizing: border-box;
          margin: 0;
          overflow: hidden;
        }
      }
    `,
  ],
})
export class AddingNewTaskDialog {
  constructor(
    public dialogRef: MatDialogRef<AddingNewTaskDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  textareaData: string = '';
  onNoClick() {
    
    this.dialogRef.close(false);
  }
}
