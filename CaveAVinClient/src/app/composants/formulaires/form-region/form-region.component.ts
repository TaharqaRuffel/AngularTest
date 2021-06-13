import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
  isValidNom = true;

  constructor(private serviceRegion: RegionService) { }

  regionForm = new FormGroup({
    nom : new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(50)])
  })

  ngOnInit(): void {
  }

  public onSubmit(region:Region):void{

    if (this.isCancel){
      this.soumis.emit(true);
    }else if(this.regionForm.valid){
      this.ajoutRegion(region);
      this.soumis.emit(true);
    }else{
      this.isValidNom = this.regionForm.controls.nom.valid;
    }

  }

  ajoutRegion(region:Region){
    this.serviceRegion.addRegion(region);
    console.log(this.serviceRegion.getRegions())
  }

  onCancelClick(){
    this.isCancel =true;
  }

  submitClassNom(){
    let cssClass:string = "form-control"
    if(!this.isValidNom){
      cssClass += " is-invalid"
    }
    return cssClass;
  }
}
