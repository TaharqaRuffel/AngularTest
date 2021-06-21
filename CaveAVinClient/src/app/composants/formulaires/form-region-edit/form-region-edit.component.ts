import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Region} from "../../../modeles/region";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegionService} from "../../../services/region.service";

@Component({
  selector: 'app-form-region-edit',
  templateUrl: './form-region-edit.component.html',
  styleUrls: ['./form-region-edit.component.css']
})
export class FormRegionEditComponent implements OnInit {
@Input()region:Region = new Region();
@Output()isUpdated = new EventEmitter();

  regionForm = new FormGroup({
    id : new FormControl(''),
    nom : new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(50)])
  })

  constructor(private serviceRegion:RegionService) { }

  ngOnInit(): void {
    this.regionForm.setValue({
      id:this.region.id,
      nom:this.region.nom
    })
  }

  onDelete(id:any) {
    this.serviceRegion.deleteRegion(id).toPromise().then(r=>this.isUpdated.emit(true));
  }

  onSubmit(region:Region){
    this.serviceRegion.editRegion(region).toPromise().then(r=>this.isUpdated.emit(true));
  }

}
