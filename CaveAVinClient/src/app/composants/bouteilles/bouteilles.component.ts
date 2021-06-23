import { Component, OnInit } from '@angular/core';
import {BouteillesService} from "../../services/bouteilles.service";


@Component({
  selector: 'app-bouteilles',
  templateUrl: './bouteilles.component.html',
  styleUrls: ['./bouteilles.component.css']
})
export class BouteillesComponent implements OnInit {

  bouteilles = [] as any;

  constructor(private serviceBouteilles: BouteillesService ) { }

  ngOnInit(): void {
    this.updateBouteilles();
  }

  updateBouteilles(){
    this.serviceBouteilles.getBouteilles().toPromise().then((data)=>{
      this.bouteilles = data;
    });
  }
  supprimerBouteille(id:number){
    this.serviceBouteilles.deleteBouteille(id).toPromise().then((data)=>this.updateBouteilles());
  }

}
