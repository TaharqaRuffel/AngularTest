import { Injectable } from '@angular/core';
import {Region} from "../modeles/region";
import {HttpClient} from "@angular/common/http";
import {ApiEndpointsService} from "../core/services/api-endpoints.service";
import {Observable} from "rxjs";
import {ApiHttpService} from "../core/services/api-http.service";

const URL_GET_REGIONS = 'http://localhost:8080/regions';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  regions = [
    new Region( 1 ,'Pays de la Loire'),
    new Region( 2 ,'Bretagne'),
    new Region( 3 ,'Bordeaux'),
    new Region( 4 ,'Alsace'),
    new Region( 5 ,'Bourgogne')
  ]

  constructor(private apiEndpointsService: ApiEndpointsService,
              private apiHttpService: ApiHttpService ,
  ) { }

  deserializeRegion(object:any):Region{

    let newRegion = new Region();
    newRegion.id = object.id;
    newRegion.nom = object.nom;

    return newRegion;
  }

  getRegions():Observable<Region[]>{
    return this.apiHttpService.get<Region[]>(this.apiEndpointsService.getRegionsEndpoint());
  }

  getRegion(index:number):Region{
    return this.regions[index];
  }

  deleteRegion(index:number):Region[]{
    this.regions.splice(index,1);
    return this.regions;
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
