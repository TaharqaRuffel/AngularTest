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

  getCouleur(index:number):Couleur{
    return this.couleurs[index];
  }

  deleteCouleur(index:number):Couleur[]{
    this.couleurs.splice(index,1);
    return this.couleurs;
  }

  addCouleur(newCouleur:Couleur):Couleur[]{
    this.couleurs.push(newCouleur);
    return this.couleurs;
  }

  editCouleur(index:number,modifiedCouleur:Couleur):Couleur[]{
    this.couleurs[index] = modifiedCouleur;
    return this.couleurs;
  }

}
