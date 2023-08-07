import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyMaterialsRoutingModule } from './study-materials-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { StudyMaterialListComponent } from './study-material-list/study-material-list.component';
import { StudyMaterialComponent } from './study-material/study-material.component';
import { actionCellvalueRenderComponent } from './study-material-list/actionCellvalueRender.component';
import { AgGridModule } from 'ag-grid-angular';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CreateMaterialDialogComponent } from './create-material-dialog/create-material-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewerComponent } from './viewer/viewer.component';
import { ApiService } from '../shared/api.service';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    StudyMaterialListComponent,
    StudyMaterialComponent,
    actionCellvalueRenderComponent,
    CreateMaterialDialogComponent,
    ViewerComponent,
  ],
  imports: [
    CommonModule,
    StudyMaterialsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    AgGridModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [
    // ... other providers like services
  ],
})
export class StudyMaterialsModule { }
