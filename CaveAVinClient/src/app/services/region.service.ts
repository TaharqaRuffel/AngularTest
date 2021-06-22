import { Injectable } from '@angular/core';
import {Region} from "../modeles/region";
import { HttpHeaders} from "@angular/common/http";
import {ApiEndpointsService} from "../core/services/api-endpoints.service";
import {Observable} from "rxjs";
import {ApiHttpService} from "../core/services/api-http.service";

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private apiEndpointsService: ApiEndpointsService,
              private apiHttpService: ApiHttpService,
  ) { }

  getRegions():Observable<Region[]>{
    return this.apiHttpService.get<Region[]>(this.apiEndpointsService.getRegionsEndpoint());
  }

  getRegion(id:number):Observable<Region>{
    return this.apiHttpService.get<Region>(this.apiEndpointsService.getRegionWithIdEndpoint(id));
  }

  deleteRegion(id:number):Observable<any>{
    return this.apiHttpService.delete(this.apiEndpointsService.getRegionWithIdEndpoint(id));
  }

  addRegion(newRegion:Region):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.apiHttpService.post(this.apiEndpointsService.getRegionsEndpoint(),JSON.stringify(newRegion),httpOptions);

  }

  editRegion(modifiedRegion:Region){
    let httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json'
      })
    };
    return this.apiHttpService.put(this.apiEndpointsService.getRegionsEndpoint(),JSON.stringify(modifiedRegion),httpOptions);
  }

}
