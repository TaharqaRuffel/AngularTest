import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-region',
  templateUrl: './form-region.component.html',
  styleUrls: ['./form-region.component.css']
})
export class FormRegionComponent implements OnInit {

  constructor() { }

  regionForm = new FormGroup({
    nom : new FormControl('')
  })

  ngOnInit(): void {
  }

}
