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

  constructor(private  serviceRegion: RegionService) {
    serviceRegion.getRegions().subscribe((data)=> this.regions = data);
  }

  ngOnInit(): void {
  }

}
