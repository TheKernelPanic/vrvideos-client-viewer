import {BaseHttpService} from "../base-http.service";
import {Observable} from "rxjs";
import {Actress} from "../../domain/models";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ListingHttpService extends BaseHttpService {
  public request(): Observable<Actress[]> {
    return this.httpClient.get<Actress[]>(this.host + '/actress/listing');
  }
}
