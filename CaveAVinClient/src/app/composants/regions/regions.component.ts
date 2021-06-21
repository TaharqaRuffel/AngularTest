import {Component, OnInit} from '@angular/core';
import {RegionService} from "../../services/region.service";
import {Region} from "../../modeles/region";

@Component({
  selector: 'app-region',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  regions = [] as Region[];
  regionResearched: Region | null = null;

  constructor(private  serviceRegion: RegionService) {

  }

  ngOnInit(): void {
    this.updateRegions();
    this.serviceRegion.getRegion(3).subscribe((data)=> this.regionResearched = data)
  }

  updateRegions(){
    this.serviceRegion.getRegions().subscribe((data)=> this.regions = data);
  }

}
