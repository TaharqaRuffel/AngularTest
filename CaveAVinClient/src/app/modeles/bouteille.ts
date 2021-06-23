import {Region} from "./region";
import {Couleur} from "./couleur";

export class Bouteille {
  id?:number;
  nom?:string;
  region?:Region ;
  couleur?:Couleur;
  petillant?:boolean;
  millesime?:string;
  quantite?:number;

  constructor() {
  }
}
