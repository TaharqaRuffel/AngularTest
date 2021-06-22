import {Region} from "./region";
import {Couleur} from "./couleur";

export class Bouteille {
  id:number|undefined;
  nom:string|undefined;
  region:Region |undefined;
  couleur:Couleur|undefined;
  petillant:boolean|undefined;
  millesime:string|undefined;
  quantite:number|undefined;

  constructor(id: number|undefined = undefined, nom: string|undefined= undefined, region: Region|undefined= undefined, couleur: Couleur|undefined= undefined, petillant: boolean|undefined= undefined, millesime: string|undefined= undefined, quantite: number|undefined= undefined) {
    this.id = id;
    this.nom = nom;
    this.region = region;
    this.couleur = couleur;
    this.petillant = petillant;
    this.millesime = millesime;
    this.quantite = quantite;
  }
}
