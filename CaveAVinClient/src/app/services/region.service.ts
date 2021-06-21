import { Injectable } from '@angular/core';
import {Region} from "../modeles/region";
import {HttpClient} from "@angular/common/http";
import {ApiEndpointsService} from "../core/services/api-endpoints.service";
import {Observable} from "rxjs";
import {ApiHttpService} from "../core/services/api-http.service";

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private apiEndpointsService: ApiEndpointsService,
              private apiHttpService: ApiHttpService ,
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

  addRegion(newRegion:Region):Region[]{
    this.regions.push(newRegion);
    return this.regions;
  }

  editRegion(index:number,modifiedRegion:Region):Region[]{
    this.regions[index] = modifiedRegion;
    return this.regions;
  }

}
