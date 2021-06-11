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
    this.bouteilles = [
      new Bouteille(1 ,'Chateau Latour',serviceRegion.getRegion(3),serviceCouleur.getCouleur(1) ,false,'2014',3),
      new Bouteille(2 ,'Coteaux du Layon',serviceRegion.getRegion(1),serviceCouleur.getCouleur(2)  ,true,'2020',5)
    ]
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
