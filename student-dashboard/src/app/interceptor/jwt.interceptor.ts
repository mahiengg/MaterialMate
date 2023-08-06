import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

// import { config } from '../../config';
  import { ApiService } from '../shared/api.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private apiService: ApiService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to api url
        const jwt_token = this.apiService.getToken();
      //  const isLoggedIn = currentUser && currentUser.token;
        //const isApiUrl = request.url.startsWith(config.apiUrl);
      
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${jwt_token}`
                }
            });
        

        return next.handle(request);
    }
}