import { Component, OnInit } from '@angular/core';
import {Couleur} from "../../../modeles/couleur";

@Component({
  selector: 'app-form-couleurs',
  templateUrl: './form-couleurs.component.html',
  styleUrls: ['./form-couleurs.component.css']
})
export class FormCouleursComponent implements OnInit {

  couleurform = new Couleur(0,'')

  constructor() { }

  ngOnInit(): void {
  }

  ajoutCouleur(couleur:Couleur){
    console.log(couleur);
  }

}
