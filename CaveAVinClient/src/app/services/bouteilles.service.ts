import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BouteillesService {

  bouteilles = [
    {id : 1 ,nom:'Chateau Latour','couleur' : 'rouge', 'region':'Bordeaux','petillant':false,'millesime':'2014','quantite':3},
    {id : 2 ,nom:'Coteaux du Layon','couleur' : 'blanc', 'region':'Pays de la Loire','petillant':true,'millesime':'2020','quantite':5}
  ]

  constructor() { }

  getBouteilles(){
    return this.bouteilles;
  }

  deleteBouteille(index:number){
    this.bouteilles.splice(index,1);
    return this.bouteilles;
  }

}
