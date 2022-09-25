import {HttpClient} from "@angular/common/http";
import {Inject, Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export abstract class BaseHttpService {

  public constructor(
    protected httpClient: HttpClient,
    @Inject('APPLICATION_SERVER_HOST') protected readonly host: string
  ) {
  }
}
