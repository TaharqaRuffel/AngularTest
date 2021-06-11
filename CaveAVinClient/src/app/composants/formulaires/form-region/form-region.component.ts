import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RegionService} from "../../../services/region.service";
import {Region} from "../../../modeles/region";

@Component({
  selector: 'app-form-region',
  templateUrl: './form-region.component.html',
  styleUrls: ['./form-region.component.css']
})
export class FormRegionComponent implements OnInit {

  constructor(private serviceRegion: RegionService) { }

  regionForm = new FormGroup({
    nom : new FormControl('')
  })

  ngOnInit(): void {
  }

  ajoutRegion(region:Region){
    this.serviceRegion.addRegion(region);
    console.log(this.serviceRegion.getRegions())
  }

}
