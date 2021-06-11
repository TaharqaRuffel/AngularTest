import { Injectable } from '@angular/core';
import {Couleur} from "../modeles/couleur";

@Injectable({
  providedIn: 'root'
})
export class CouleurService {

  couleurs = [
    new Couleur( 1 ,'rouge'),
    new Couleur( 2 ,'blanc'),
    new Couleur( 3 ,'rosé')
  ]

  constructor() { }

  getCouleurs(){
    return this.couleurs;
  }

  deleteCouleur(index:number){
    this.couleurs.splice(index,1);
    return this.couleurs;
  }

  addCouleur(newCouleur:Couleur){
    this.couleurs.push(newCouleur);
    return this.couleurs;
  }

}
