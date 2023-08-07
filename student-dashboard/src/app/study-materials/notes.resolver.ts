import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import userNotes from '../testDatas/userNotes.json';

export const notesResolver: ResolveFn<any> = 
(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return userNotes;
};
