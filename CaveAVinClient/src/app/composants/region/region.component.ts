import { Component, OnInit } from '@angular/core';
import {RegionService} from "../../services/region.service";

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  regions = [] as any;

  constructor(private  serviceRegion:RegionService) {
    this.regions = serviceRegion.getRegions();
  }

  ngOnInit(): void {
  }

}
