import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import materialData from '../app/testDatas/userMaterials.json';
import { ApiService } from './shared/api.service';
import { inject } from '@angular/core';

export const materialsResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  apiService: ApiService = inject(ApiService)
): Observable<{}> => {
  return apiService.getUserPdfMaterials().pipe(
    catchError((err) => {
      return of('No data' + err);
    })
  );
};
