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
    this.bouteilles = this.serviceBouteilles.getBouteilles();
  }


}
