import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialViewerComponent } from './material-viewer/material-viewer.component';

const routes: Routes = [
    {
        path: "",
        component: MaterialViewerComponent,
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyMaterialViewRoutingModule { }
