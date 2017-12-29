import {Injectable} from '@angular/core';
import {HttpInterceptor} from "@angular/common/http";
import {HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpHandler} from "@angular/common/http";
import {HttpRequest} from "@angular/common/http";

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  private serverUrl: string = 'http://localhost:8080/';

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let request = req.clone({
      url: this.serverUrl + req.url
    });

    return next.handle(request);
  }
}
