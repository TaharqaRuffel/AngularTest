import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Bouteille} from "../../../modeles/bouteille";
import {RegionService} from "../../../services/region.service";
import {BouteillesService} from "../../../services/bouteilles.service";
import {CouleurService} from "../../../services/couleur.service";
import {Couleur} from "../../../modeles/couleur";
import {Region} from "../../../modeles/region";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-bouteille',
  templateUrl: './form-bouteille.component.html',
  styleUrls: ['./form-bouteille.component.css']
})
export class FormBouteilleComponent implements OnInit, OnDestroy {
  @Input() bouteille: Bouteille = new Bouteille();
  @Input() isUpdate: boolean = false;

  bouteilleForm = new FormGroup({
    id: new FormControl(''),
    nom: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50)
    ]),
    region: new FormControl('', Validators.required),
    couleur: new FormControl('', Validators.required),
    petillant: new FormControl(''),
    millesime: new FormControl('', [Validators.required, Validators.pattern("[0-2]{1}[0-9]{3}")]),
    quantite: new FormControl('', Validators.required)
  })

  listeCouleurs: Couleur[] = [];
  listeRegions: Region[] = [];
  isFormCouleur: boolean = false;
  isFormRegion: boolean = false;

  constructor(private serviceBouteille: BouteillesService,
              private serviceCouleur: CouleurService,
              private serviceRegion: RegionService,private router: Router) {
  }

  ngOnInit(): void {
    this.serviceCouleur.getCouleurs().toPromise().then((data) => this.listeCouleurs = data);
    this.serviceRegion.getRegions().subscribe((data) => this.listeRegions = data);
    if (this.isUpdate) {
      this.bouteilleForm.setValue({
        id: this.bouteille.id,
        nom: this.bouteille.nom,
        region: this.bouteille.nom,
        couleur: this.bouteille.couleur?.id,
        petillant: this.bouteille.petillant,
        millesime: this.bouteille.region?.id,
        quantite: this.bouteille.quantite,
      })
    }

  }

  onSubmit() {

    let regionBouteille: Region = new Region();
    let couleurBouteille: Couleur = new Couleur();
    let bouteille: Bouteille = this.bouteilleForm.value;
    regionBouteille.id = this.bouteilleForm.value.region;
    couleurBouteille.id = this.bouteilleForm.value.couleur;
    bouteille.region = regionBouteille;
    bouteille.couleur = couleurBouteille;
    if (this.bouteilleForm.valid) {
      if (this.isUpdate) {
        this.modifierBouteille(bouteille);
      } else {
        this.ajoutBouteille(bouteille);
      }
      this.router.navigate(['bouteilles'])
    }
  }

  ajoutBouteille(bouteille: Bouteille):void {
    this.serviceBouteille.addBouteille(bouteille).subscribe();
  }

  modifierBouteille(bouteille: Bouteille):void {
    this.serviceBouteille.editBouteille(bouteille).subscribe();
  }

  switchFormCouleur(): void {
    this.isFormCouleur = !this.isFormCouleur;
  }

  switchFormRegion():void {
    this.isFormRegion = !this.isFormRegion;
  }

  ngOnDestroy():void {
  }
}
