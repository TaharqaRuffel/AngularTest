import { Injectable } from '@angular/core';
import {Bouteille} from "../modeles/bouteille";
import {RegionService} from "./region.service";
import {CouleurService} from "./couleur.service";
import {ApiEndpointsService} from "../core/services/api-endpoints.service";
import {ApiHttpService} from "../core/services/api-http.service";
import {Region} from "../modeles/region";
import {Observable} from "rxjs";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BouteillesService {

  bouteilles = [] as any;

  constructor(private serviceRegion: RegionService,
              private serviceCouleur: CouleurService,
              private apiEndpointsService: ApiEndpointsService,
              private apiHttpService: ApiHttpService) {
  }

  getBouteilles():Observable<Bouteille[]>{
    return this.apiHttpService.get<Bouteille[]>(this.apiEndpointsService.getBouteillesEndpoint());
  }

  getBouteille(id:number):Observable<Bouteille>{
    return this.apiHttpService.get<Bouteille>(this.apiEndpointsService.getBouteilleWithIdEndpoint(id));
  }

  getBouteilleTrierPar(par:string):Observable<Bouteille>{
    return this.apiHttpService.get<Bouteille>(this.apiEndpointsService.getBouteillesSortByEndpoint(par));
  }

  getBouteillesFiltrerPar(filtre:string):Observable<Bouteille>{
    return this.apiHttpService.get<Bouteille>(this.apiEndpointsService.getBouteillesWithFiltreEndpoint(filtre));
  }

  deleteBouteille(id:number){
    return this.apiHttpService.delete(this.apiEndpointsService.getBouteilleWithIdEndpoint(id));
  }

  addBouteille(newBouteille:Bouteille):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.apiHttpService.post(this.apiEndpointsService.getBouteillesEndpoint(),JSON.stringify(newBouteille),httpOptions);

  }

  editBouteille(modifiedBouteille:Bouteille):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json'
      })
    };
    return this.apiHttpService.put(this.apiEndpointsService.getRegionsEndpoint(),JSON.stringify(modifiedBouteille),httpOptions);

  }

}
