import { Component, OnInit } from '@angular/core';
import {Couleur} from "../../modeles/couleur";
import {CouleurService} from "../../services/couleur.service";

@Component({
  selector: 'app-couleurs',
  templateUrl: './couleurs.component.html',
  styleUrls: ['./couleurs.component.css']
})
export class CouleursComponent implements OnInit {
  couleurs = [] as Couleur[];
  couleurResearched: Couleur | null = null;

  constructor(private  serviceCouleur: CouleurService) {

  }

  ngOnInit(): void {
    this.updateCouleurs();
    //this.serviceCouleur.getCouleur(3).subscribe((data)=> this.couleurResearched = data)
  }

  updateCouleurs(){
    //this.serviceCouleur.getCouleurs().subscribe((data)=> this.couleurs = data);
  }

}
