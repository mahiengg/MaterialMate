import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { TaskManagementRoutingModule } from './task-management-routing.module';
import { MyTaskComponent } from './my-task/my-task.component';
import { MyTaksListComponent } from './my-taks-list/my-taks-list.component';
import {CdkDrag, CdkDropList, DragDropModule} from '@angular/cdk/drag-drop';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import { AddingNewTaskDialog } from './my-taks-list/AddingNewTaskDialog';




@NgModule({
  declarations: [MyTaskComponent, MyTaksListComponent, AddingNewTaskDialog],
  imports: [
    CommonModule,
    TaskManagementRoutingModule,
    DragDropModule,
    CdkDropList, NgFor, CdkDrag,
    MatDividerModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
     MatInputModule, 
     MatNativeDateModule
  ]
})
export class TaskManagementModule { }
