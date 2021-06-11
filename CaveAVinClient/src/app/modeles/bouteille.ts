import {Region} from "./region";
import {Couleur} from "./couleur";

export class Bouteille {
  id:number;
  nom:string;
  region:Region ;
  couleur:Couleur;
  petillant:boolean;
  millesime:string;
  quantite:number;

  constructor(id: number, nom: string, region: Region, couleur: Couleur, petillant: boolean, millesime: string, quantite: number) {
    this.id = id;
    this.nom = nom;
    this.region = region;
    this.couleur = couleur;
    this.petillant = petillant;
    this.millesime = millesime;
    this.quantite = quantite;
  }
}
