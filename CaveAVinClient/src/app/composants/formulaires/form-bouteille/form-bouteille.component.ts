import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Bouteille} from "../../../modeles/bouteille";
import {RegionService} from "../../../services/region.service";
import {BouteillesService} from "../../../services/bouteilles.service";
import {CouleurService} from "../../../services/couleur.service";
import {Couleur} from "../../../modeles/couleur";
import {Region} from "../../../modeles/region";

@Component({
  selector: 'app-form-bouteille',
  templateUrl: './form-bouteille.component.html',
  styleUrls: ['./form-bouteille.component.css']
})
export class FormBouteilleComponent implements OnInit, OnDestroy {

  bouteilleForm = new FormGroup({
    id : new FormControl(''),
    nom : new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50)
    ]),
    region : new FormControl('',Validators.required),
    couleur : new FormControl('',Validators.required),
    petillant : new FormControl(''),
    millesime : new FormControl('',[Validators.required,Validators.pattern("[0-2]{1}[0-9]{3}")]),
    quantite : new FormControl('',Validators.required)
  })

  listeCouleurs:Couleur[] = [];
  listeRegions:Region[] = [];
  isFormCouleur:boolean = false;
  isFormRegion:boolean = false;

  constructor(private serviceBouteille: BouteillesService,
              private serviceCouleur:CouleurService,
              private serviceRegion:RegionService,)
  {
  }

  ngOnInit(): void {
    this.listeCouleurs = this.serviceCouleur.getCouleurs();
    this.serviceRegion.getRegions().subscribe((data)=> this.listeRegions = data);
  }

  onSubmit(){
    if(this.bouteilleForm.valid){
      this.ajoutBouteille(this.bouteilleForm.value);
    }
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

  ngOnDestroy(): void {
  }
}
