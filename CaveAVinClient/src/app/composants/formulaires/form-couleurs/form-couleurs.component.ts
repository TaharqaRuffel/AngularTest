import { Component, OnInit } from '@angular/core';
import {Couleur} from "../../../modeles/couleur";
import {CouleurService} from "../../../services/couleur.service";

@Component({
  selector: 'app-form-couleurs',
  templateUrl: './form-couleurs.component.html',
  styleUrls: ['./form-couleurs.component.css']
})
export class FormCouleursComponent implements OnInit {

  couleurform = new Couleur(0,'')

  constructor(private serviceCouleur:CouleurService) { }

  ngOnInit(): void {
  }

  ajoutCouleur(couleur:Couleur){
    this.serviceCouleur.addCouleur(couleur);
console.log(this.serviceCouleur.getCouleurs())
  }

}
