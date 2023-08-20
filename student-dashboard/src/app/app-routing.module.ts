import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { materialsResolver } from './materials.resolver';
import { taskResolverResolver } from './Resolvers/task-resolver.resolver';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'studymaterials',
    loadChildren: () =>
      import('./study-materials/study-materials.module').then(
        (m) => m.StudyMaterialsModule
      ),
    resolve: { materialData: materialsResolver },
    canActivate: [AuthGuard],
  },
  {
    path: 'myTask',
    loadChildren: () =>
      import('./task-management/task-management.module').then(
        (m) => m.TaskManagementModule
      ),
       resolve: {userTaskData: taskResolverResolver},
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
