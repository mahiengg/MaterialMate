import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudyMaterialComponent } from './study-material/study-material.component';
import { ViewerComponent } from './viewer/viewer.component';
import { AuthGuard } from '../guards/auth.guard';
import { notesResolver } from './notes.resolver';

const routes: Routes = [
  {
    path: "",
    component: StudyMaterialComponent,
  },
  {
    path: ':id',
    loadChildren: () =>
      import('../study-material-view/study-material-view.module').then(
        (m) => m.StudyMaterialViewModule
      ), resolve: {userNotes: notesResolver},
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudyMaterialsRoutingModule {}
