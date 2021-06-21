import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegionService} from "../../../services/region.service";
import {Region} from "../../../modeles/region";
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
    nom : new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(50)])
  })

  ngOnInit(): void {
  }

  public onSubmit(region:Region):void{

    if (this.isCancel){
      this.soumis.emit(true);
    }else if(this.regionForm.valid){
      this.ajoutRegion(region);
    }

  }

  ajoutRegion(region:Region){
    this.serviceRegion.addRegion(region).toPromise().then(r=>this.soumis.emit(true));
  }

  onCancelClick(){
    this.isCancel =true;
  }

}
