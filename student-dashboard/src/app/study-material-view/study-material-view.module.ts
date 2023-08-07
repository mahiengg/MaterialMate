import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialViewerComponent } from './material-viewer/material-viewer.component';
import {StudyMaterialViewRoutingModule} from './study-material-view-routing.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ApiService } from '../shared/api.service';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotePadComponent } from './note-pad/note-pad.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    MaterialViewerComponent,
    NotePadComponent
  ],
  imports: [
    CommonModule,
    StudyMaterialViewRoutingModule,
    PdfViewerModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    FlexLayoutModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    ReactiveFormsModule
  ] ,
  providers: [
    
    //ApiService
    
    // ... other providers like services
  ],
})
export class StudyMaterialViewModule { }
