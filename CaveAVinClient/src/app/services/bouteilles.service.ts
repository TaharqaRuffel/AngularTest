import { Injectable } from '@angular/core';
import {Bouteille} from "../modeles/bouteille";
import {RegionService} from "./region.service";
import {CouleurService} from "./couleur.service";

@Injectable({
  providedIn: 'root'
})
export class BouteillesService {

  bouteilles = [] as any;

  constructor(private serviceRegion: RegionService,private serviceCouleur: CouleurService) {
  }

  getBouteilles(){
    return this.bouteilles;
  }

  deleteBouteille(index:number){
    this.bouteilles.splice(index,1);
    return this.bouteilles;
  }

  getBouteille(index:number):Bouteille{
    return this.bouteilles[index];
  }

  addBouteille(newBouteille:Bouteille):Bouteille[]{
    this.bouteilles.push(newBouteille);
    return this.bouteilles;
  }

  editBouteille(index:number,modifiedBouteille:Bouteille):Bouteille[]{
    this.bouteilles[index] = modifiedBouteille;
    return this.bouteilles;
  }

}
