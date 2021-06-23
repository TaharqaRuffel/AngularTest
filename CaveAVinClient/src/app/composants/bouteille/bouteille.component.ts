import {Component, Input, OnInit} from '@angular/core';
import {BouteillesService} from "../../services/bouteilles.service";
import {Bouteille} from "../../modeles/bouteille";
import {Region} from "../../modeles/region";
import {Couleur} from "../../modeles/couleur";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-bouteille',
  templateUrl: './bouteille.component.html',
  styleUrls: ['./bouteille.component.css']
})
export class BouteilleComponent implements OnInit {
  @Input() bouteille:Bouteille = new Bouteille( 0 ,'Pas de bouteille',new Region(),new Couleur(),false,'2021',0);
  @Input() index = 0;

  constructor(private serviceBouteilles: BouteillesService,private routeActive: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.index === 0 != null){
      let idBouteilleHtml = this.routeActive.snapshot.paramMap.get('id');
      let idBouteille =0;

      if(idBouteilleHtml != null){
        idBouteille = Number.parseInt(idBouteilleHtml);
      }

      this.serviceBouteilles.getBouteille(idBouteille).toPromise().then((data)=>this.bouteille=data)
    }
  }

  supprimerBouteille(){
    let id = this.bouteille.id == undefined ? 0 : this.bouteille.id;
    this.serviceBouteilles.deleteBouteille(id).subscribe();
  }

}
