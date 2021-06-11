import { Component, OnInit } from '@angular/core';
import {Couleur} from "../../../modeles/couleur";

@Component({
  selector: 'app-form-couleurs',
  templateUrl: './form-couleurs.component.html',
  styleUrls: ['./form-couleurs.component.css']
})
export class FormCouleursComponent implements OnInit {

  constructor() { }

  couleurform = new Couleur(0,'')

  ngOnInit(): void {
  }

  ajoutCouleur(){

  }

}
