import {Component, Input, OnInit} from '@angular/core';
import {BouteillesService} from "../../services/bouteilles.service";
import {Bouteille} from "../../modeles/bouteille";
import {Region} from "../../modeles/region";
import {Couleur} from "../../modeles/couleur";

@Component({
  selector: 'app-bouteille',
  templateUrl: './bouteille.component.html',
  styleUrls: ['./bouteille.component.css']
})
export class BouteilleComponent implements OnInit {

  @Input() bouteille:Bouteille = new Bouteille( 0 ,'Pas de bouteille',new Region(0,''),new Couleur(0,''),false,'2021',0);
  @Input()index = 0;

  constructor(private serviceBouteilles: BouteillesService ) { }

  ngOnInit(): void {
  }

  supprimerBouteille(){
    this.serviceBouteilles.deleteBouteille(this.index);
  }

}
