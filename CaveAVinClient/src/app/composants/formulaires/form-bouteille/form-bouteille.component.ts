import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Bouteille} from "../../../modeles/bouteille";
import {RegionService} from "../../../services/region.service";
import {BouteillesService} from "../../../services/bouteilles.service";
import {CouleurService} from "../../../services/couleur.service";
import {Couleur} from "../../../modeles/couleur";
import {Region} from "../../../modeles/region";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form-bouteille',
  templateUrl: './form-bouteille.component.html',
  styleUrls: ['./form-bouteille.component.css']
})
export class FormBouteilleComponent implements OnInit, OnDestroy {
  isUpdate: boolean = false;
  bouteille: Bouteille = new Bouteille();

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
              private serviceRegion: RegionService,
              private router: Router,
              private routeActive:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.serviceCouleur.getCouleurs().toPromise().then((data) => this.listeCouleurs = data);
    this.serviceRegion.getRegions().subscribe((data) => this.listeRegions = data);

    let idBouteilleHtml = this.routeActive.snapshot.paramMap.get('id');

    if (idBouteilleHtml!=null) {
      let idBouteille = Number.parseInt(idBouteilleHtml);
      this.serviceBouteille.getBouteille(idBouteille).subscribe((bouteille) => {
        this.bouteilleForm.setValue({
          id: bouteille.id,
          nom: bouteille.nom,
          region: bouteille.region?.id,
          couleur: bouteille.couleur?.id,
          petillant: bouteille.petillant,
          millesime: bouteille.millesime,
          quantite: bouteille.quantite,
        })
      });

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
        this.serviceBouteille.editBouteille(bouteille).subscribe(d=>this.router.navigate(['bouteilles']));

      } else {
        this.serviceBouteille.addBouteille(bouteille).subscribe(d=>this.router.navigate(['bouteilles']));
      }

    }
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
