import {Component, OnInit} from '@angular/core';
import {RegionService} from "../../services/region.service";
import {Region} from "../../modeles/region";

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  regions = [] as Region[];
  regions2: any;

  constructor(private  serviceRegion: RegionService) {
    serviceRegion.getRegionsFromAPI().subscribe(
      result => result.forEach(
        region =>this.regions.push(this.serviceRegion.deserializeRegion(region))
      )
    );
  }

  ngOnInit(): void {
  }

}
