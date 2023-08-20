import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { Observable, catchError, of } from 'rxjs';
import { inject } from '@angular/core';
import moment from 'moment';

export const taskResolverResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  apiService: ApiService = inject(ApiService)
): Observable<{}> => {
  const date = moment(new Date()).format("YYYY-MM-DD");
  return apiService.getTaskByDate(date).pipe(
    catchError((err) => {
      return of('No data' + err);
    })
  );
};
