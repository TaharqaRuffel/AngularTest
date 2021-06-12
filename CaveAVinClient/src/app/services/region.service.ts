import { Injectable } from '@angular/core';
import {Region} from "../modeles/region";

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  regions = [
    new Region( 1 ,'Pays de la Loire'),
    new Region( 2 ,'Bretagne'),
    new Region( 3 ,'Bordeaux'),
    new Region( 4 ,'Alsace'),
    new Region( 5 ,'Bourgogne')
  ]

  constructor() { }

  getRegions():Region[]{
    return this.regions;
  }

  getRegion(index:number):Region{
    return this.regions[index];
  }

  deleteRegion(index:number):Region[]{
    this.regions.splice(index,1);
    return this.regions;
  }

  addRegion(newRegion:Region):Region[]{
    this.regions.push(newRegion);
    return this.regions;
  }

  editRegion(index:number,modifiedRegion:Region):Region[]{
    this.regions[index] = modifiedRegion;
    return this.regions;
  }

}
