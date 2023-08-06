import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { materialsResolver } from './materials.resolver';

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
    canActivate: [AuthGuard],
    resolve: {materialData: materialsResolver},
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
