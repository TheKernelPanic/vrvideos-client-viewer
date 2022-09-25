import {BaseHttpService} from "../base-http.service";
import {Injectable} from "@angular/core";
import {Actress} from "../../domain/models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CreateHttpService extends BaseHttpService {
  public request(actress: Actress): Observable<void> {
    return this.httpClient.post<void>(this.host + '/actress/create', actress);
  }
}
