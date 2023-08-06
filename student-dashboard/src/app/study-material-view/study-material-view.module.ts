import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialViewerComponent } from './material-viewer/material-viewer.component';
import {StudyMaterialViewRoutingModule} from './study-material-view-routing.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ApiService } from '../shared/api.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MaterialViewerComponent
  ],
  imports: [
    CommonModule,
    StudyMaterialViewRoutingModule,
    PdfViewerModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule
  ] ,
  providers: [
    
    //ApiService
    
    // ... other providers like services
  ],
})
export class StudyMaterialViewModule { }
