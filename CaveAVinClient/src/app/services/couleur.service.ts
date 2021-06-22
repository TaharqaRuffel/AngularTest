import { Injectable } from '@angular/core';
import {Couleur} from "../modeles/couleur";
import {ApiEndpointsService} from "../core/services/api-endpoints.service";
import {ApiHttpService} from "../core/services/api-http.service";
import {Observable} from "rxjs";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CouleurService {

  constructor(private apiEndpointsService: ApiEndpointsService,
              private apiHttpService: ApiHttpService) { }

  getCouleurs():Observable<Couleur[]>{
    return this.apiHttpService.get<Couleur[]>(this.apiEndpointsService.getCouleursEndpoint());
  }

  getCouleur(id:number):Observable<Couleur>{
    return this.apiHttpService.get<Couleur>(this.apiEndpointsService.getCouleurWithIdEndpoint(id));
  }

  deleteCouleur(id:number):Observable<any>{
    return this.apiHttpService.delete(this.apiEndpointsService.getCouleurWithIdEndpoint(id));
  }

  addCouleur(newCouleur:Couleur):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.apiHttpService.post(this.apiEndpointsService.getCouleursEndpoint(),JSON.stringify(newCouleur),httpOptions);
  }

  editCouleur(modifiedCouleur:Couleur):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json'
      })
    };
    return this.apiHttpService.put(this.apiEndpointsService.getCouleursEndpoint(),JSON.stringify(modifiedCouleur),httpOptions);
  }

}
