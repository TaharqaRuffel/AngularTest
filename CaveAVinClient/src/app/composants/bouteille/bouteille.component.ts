import {Component, Input, OnInit} from '@angular/core';
import {BouteillesService} from "../../services/bouteilles.service";

@Component({
  selector: 'app-bouteille',
  templateUrl: './bouteille.component.html',
  styleUrls: ['./bouteille.component.css']
})
export class BouteilleComponent implements OnInit {

  @Input() bouteille = {id : 0 ,nom:'Pas de bouteille','couleur' : 'noir', 'region':'DTC','petillant':false,'millesime':'2021','quantite':0};
  @Input()index = 0;

  constructor(private serviceBouteilles: BouteillesService ) { }

  ngOnInit(): void {
  }

  supprimerBouteille(){
    this.serviceBouteilles.deleteBouteille(this.index);
  }

}
