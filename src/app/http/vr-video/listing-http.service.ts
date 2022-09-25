import {BaseHttpService} from "../base-http.service";
import {Observable} from "rxjs";
import {VrVideo} from "../../domain/models";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ListingHttpService extends BaseHttpService {

  public request(): Observable<VrVideo[]> {
    return this.httpClient.get<VrVideo[]>(this.host + '/vr-video/listing');
  }
}
