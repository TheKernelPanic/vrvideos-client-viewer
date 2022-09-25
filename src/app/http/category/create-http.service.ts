import {BaseHttpService} from "../base-http.service";
import {Injectable} from "@angular/core";
import {Category} from "../../domain/models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CreateHttpService extends BaseHttpService {
  public request(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(this.host + '/categories/create', category);
  }
}
