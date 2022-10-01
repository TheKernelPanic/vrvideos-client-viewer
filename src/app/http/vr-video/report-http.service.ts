import {BaseHttpService} from "../base-http.service";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {VrVideo} from "../../domain/models";

@Injectable({
  providedIn: 'root'
})
export class ReportHttpService extends BaseHttpService {
  
  public request(vrVideo: VrVideo): Observable<void> {

    return this.httpClient.put<void>(this.host + '/vr-video/reported/' + vrVideo.uuid, {});
  }
}
