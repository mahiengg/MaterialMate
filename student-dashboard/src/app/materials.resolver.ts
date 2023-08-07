import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import materialData from '../app/testDatas/userMaterials.json'

export const materialsResolver : ResolveFn<any> = 
(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return  materialData;
};
