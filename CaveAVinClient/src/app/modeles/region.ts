export class Region {
  id: number | undefined;
  nom: string | undefined;

  constructor(id:number|undefined = undefined, nom:string|undefined = undefined) {
    if(id!=undefined)this.id = id;
    if(nom!=undefined)this.nom = nom;
  }

}
