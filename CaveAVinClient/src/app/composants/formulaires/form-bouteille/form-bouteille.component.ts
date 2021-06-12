import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Region} from "../../../modeles/region";
import {Bouteille} from "../../../modeles/bouteille";
import {RegionService} from "../../../services/region.service";
import {BouteillesService} from "../../../services/bouteilles.service";
import {CouleurService} from "../../../services/couleur.service";
import {Couleur} from "../../../modeles/couleur";

@Component({
  selector: 'app-form-bouteille',
  templateUrl: './form-bouteille.component.html',
  styleUrls: ['./form-bouteille.component.css']
})
export class FormBouteilleComponent implements OnInit {

  bouteilleForm = new FormGroup({
    id : new FormControl(''),
    nom : new FormControl(''),
    region : new FormControl(''),
    couleur : new FormControl(''),
    petillant : new FormControl(''),
    millesime : new FormControl(''),
    quantite : new FormControl('')
  })

  listeCouleurs:Couleur[] = [];
  listeRegions:Region[] = [];
  isFormCouleur:boolean = false;
  isFormRegion:boolean = false;
  isSubmited: any;

  constructor(private serviceBouteille: BouteillesService,
              private serviceCouleur:CouleurService,
              private serviceRegion:RegionService)
  {
    this.listeCouleurs = serviceCouleur.getCouleurs();
    this.listeRegions = serviceRegion.getRegions();
    console.log(this.listeRegions);
  }

  ngOnInit(): void {
  }

  ajoutBouteille(bouteille:Bouteille):void{
    this.serviceBouteille.addBouteille(bouteille);
    console.log(this.serviceBouteille.getBouteilles());
  }

  switchFormCouleur():void{
    this.isFormCouleur = !this.isFormCouleur;
  }

  switchFormRegion():void{
    this.isFormRegion = !this.isFormRegion;
  }
}
