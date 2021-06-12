import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RegionService} from "../../../services/region.service";
import {Region} from "../../../modeles/region";
import {Couleur} from "../../../modeles/couleur";

@Component({
  selector: 'app-form-region',
  templateUrl: './form-region.component.html',
  styleUrls: ['./form-region.component.css']
})
export class FormRegionComponent implements OnInit {
  @Output() soumis = new EventEmitter();

  isCancel =false;

  constructor(private serviceRegion: RegionService) { }

  regionForm = new FormGroup({
    nom : new FormControl('')
  })

  ngOnInit(): void {
  }

  public onSubmit(region:Region):void{
    if (!this.isCancel){
      this.ajoutRegion(region);
    }
    this.soumis.emit(true);
  }

  ajoutRegion(region:Region){
    this.serviceRegion.addRegion(region);
    console.log(this.serviceRegion.getRegions())
  }

  onCancelClick(){
    this.isCancel =true;
  }
}
