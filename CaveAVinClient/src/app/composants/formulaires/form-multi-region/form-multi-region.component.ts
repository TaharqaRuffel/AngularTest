import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Region} from "../../../modeles/region";
import {RegionService} from "../../../services/region.service";


@Component({
  selector: 'app-form-multi-region',
  templateUrl: './form-multi-region.component.html',
  styleUrls: ['./form-multi-region.component.css']
})

export class FormMultiRegionComponent implements OnInit {
@Input()regions : Region[] = [];
@Output()isUpdated = new EventEmitter();


  constructor(private serviceRegion : RegionService) { }

  ngOnInit(): void {
  }

  Update() {
    this.isUpdated.emit(true);
  }

}
