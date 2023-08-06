import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export const materialsResolver : ResolveFn<any> = 
(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return  [
    {
      "id": 1,
      "createdDate": "1/8/2023",
      "materialsrc": "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf",
      "Name": "material1",
      "Subject": "ECE"
    },
    {
      "id": 2,
      "createdDate": "1/8/2023",
      "materialsrc": "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf",
      "Name": "material1",
      "Subject": "ECE"
    },
    {
      "id": 3,
      "createdDate": "1/8/2023",
      "materialsrc": "http://localhost:4200/assets/mmmm.pdf",
      "Name": "material1",
      "Subject": "ECE"
    },
    {
      "id": 4,
      "createdDate": "1/8/2023",
      "materialsrc": "http://localhost:4200/assets/mmmm.pdf",
      "Name": "material1",
      "Subject": "ECE"
    },
    {
      "id": 5,
      "createdDate": "1/8/2023",
      "materialsrc": "http://localhost:4200/assets/mmmm.pdf",
      "Name": "material1",
      "Subject": "ECE"
    }
  ];
};
