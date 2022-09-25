import {BaseHttpService} from "../base-http.service";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Actress, VrVideo} from "../../domain/models";

@Injectable({
  providedIn: 'root'
})
export class AddActressHttpService extends BaseHttpService {

  public request(vrVideo: VrVideo, actress: Actress): Observable<void> {
    return this.httpClient.put<void>(this.host + '/vr-video/add-actress/' + vrVideo.uuid + '/' + actress.slug, {});
  }
}
