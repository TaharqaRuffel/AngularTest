// Angular Modules
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

import {Region} from "../../modeles/region";

@Injectable()
export class ApiHttpService {
  constructor(
    // Angular Modules
    private http: HttpClient) {
  }

  public get<T>(url: string):Observable<T>{
    return this.http.get<T>(url);
  }

  public getWithOptions(url: string, options?: any) {
    return this.http.get(url, options);
  }

  public post(url: string, data: any, options?: any) {
    return this.http.post(url, data, options);
  }

  public put(url: string, data: any, options?: any) {
    return this.http.put(url, data, options);
  }

  public delete(url: string, options?: any) {
    return this.http.delete(url, options);
  }
}
