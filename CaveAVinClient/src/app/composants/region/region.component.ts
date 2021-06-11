import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  regions = [
    'Bretagne',
    'Normandie',
    'Pays de la Loire'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
