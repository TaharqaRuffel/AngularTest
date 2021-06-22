import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Couleur} from "../../../modeles/couleur";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CouleurService} from "../../../services/couleur.service";

@Component({
  selector: 'app-form-couleur-edit',
  templateUrl: './form-couleur-edit.component.html',
  styleUrls: ['./form-couleur-edit.component.css']
})
export class FormCouleurEditComponent implements OnInit {
  @Input() couleur: Couleur = new Couleur();
  @Output() isUpdated = new EventEmitter();

  couleurForm = new FormGroup({
    id: new FormControl(''),
    nom: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)])
  })

  constructor(private serviceCouleur: CouleurService) {
  }

  ngOnInit(): void {
    this.couleurForm.setValue({
      id: this.couleur.id,
      nom: this.couleur.nom
    })
  }

  onDelete(id: any) {
    this.serviceCouleur.deleteCouleur(id).toPromise().then(r => this.isUpdated.emit(true));
  }

  onSubmit(couleur: Couleur) {
    this.serviceCouleur.editCouleur(couleur).toPromise().then(r => this.isUpdated.emit(true));
  }
}
