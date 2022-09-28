import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {tap} from "rxjs/operators";

export default class CacheHttpInterceptor implements HttpInterceptor {

  private cache: Map<string, HttpResponse<any>> = new Map();

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.method !== 'GET') {
      return next.handle(request);
    }
    if (request.headers.get('Cache-Control') === null) {
      return next.handle(request);
    }
    const cachedHttpResponse: HttpResponse<any> = this.cache.get(request.url) as HttpResponse<any>;

    if (cachedHttpResponse) {
      return of(cachedHttpResponse.clone());
    } else {
      return next.handle(request).pipe(
        tap(
          (httpEvent: HttpEvent<any>) => {
            if (httpEvent instanceof HttpResponse) {
              this.cache.set(request.url, httpEvent.clone());
            }
          }
        )
      );
    }
  }

}
