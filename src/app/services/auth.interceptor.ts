import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  private _token: string = 'Token token=y_NbAkKc66ryYTWUXYEu';

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        Authorization: `${this._token}`,
      },
    });

    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          console.error('Unauthorized');
        }
        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
