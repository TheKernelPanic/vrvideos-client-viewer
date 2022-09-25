import {BaseHttpService} from "../base-http.service";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Category} from "../../domain/models";

@Injectable({
  providedIn: 'root'
})
export class ListingHttpService extends BaseHttpService {
  public request(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.host + '/categories/listing');
  }
}
