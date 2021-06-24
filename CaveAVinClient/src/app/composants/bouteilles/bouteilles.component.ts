import {Component, OnInit} from '@angular/core';
import {BouteillesService} from "../../services/bouteilles.service";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-bouteilles',
  templateUrl: './bouteilles.component.html',
  styleUrls: ['./bouteilles.component.css']
})
export class BouteillesComponent implements OnInit {

  bouteilles = [] as any;
  filtre: string = "";
  filtreForm = new FormGroup(
    {
              filtre: new FormControl('')
            })

  constructor(private serviceBouteilles: BouteillesService) {
  }

  ngOnInit(): void {
    this.updateBouteilles();
  }

  updateBouteilles() {
    this.serviceBouteilles.getBouteilles().toPromise().then((data) => {
      this.bouteilles = data;
    });
  }

  supprimerBouteille(id: number) {
    this.serviceBouteilles.deleteBouteille(id).toPromise().then((data) => this.updateBouteilles());
  }

  trierPar(facteur: string) {
    this.serviceBouteilles.getBouteillesTrierPar(facteur).toPromise().then((data) => this.bouteilles = data);
  }

  filtrerPar(filtre:string) {
    console.log(filtre);
    if (filtre != "") {
      this.serviceBouteilles.getBouteillesFiltrerPar(filtre).toPromise().then((data) => this.bouteilles = data);
    }
  }

}
