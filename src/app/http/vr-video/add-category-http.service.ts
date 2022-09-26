import {BaseHttpService} from "../base-http.service";
import {Injectable} from "@angular/core";
import {Category, VrVideo} from "../../domain/models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddCategoryHttpService extends BaseHttpService {
  public request(vrVideo: VrVideo, category: Category): Observable<null> {
    return this.httpClient.put<null>(this.host + '/vr-video/add-category/' + vrVideo.uuid + '/' + category.slug, {});
  }
}
