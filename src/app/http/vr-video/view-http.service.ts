import {BaseHttpService} from "../base-http.service";
import {Injectable} from "@angular/core";
import {VrVideo} from "../../domain/models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ViewHttpService extends BaseHttpService {

  public request(vrVideo: VrVideo): Observable<void> {

    return this.httpClient.put<void>(this.host + '/vr-video/view/' + vrVideo.uuid, {});
  }
}
