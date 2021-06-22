import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Couleur} from "../../../modeles/couleur";
import {CouleurService} from "../../../services/couleur.service";

@Component({
  selector: 'app-form-couleur',
  templateUrl: './form-couleur.component.html',
  styleUrls: ['./form-couleur.component.css']
})
export class FormCouleurComponent implements OnInit {
  @Output() soumis = new EventEmitter();

  couleurform = new Couleur();

  isCancel =false;

  constructor(private serviceCouleur:CouleurService) { }

  ngOnInit(): void {
  }

  public onSubmit(couleur:Couleur):void{
    if (!this.isCancel ){
      this.ajoutCouleur(couleur);
    }
    this.soumis.emit(true);
  }

  ajoutCouleur(couleur:Couleur){
    this.serviceCouleur.addCouleur(couleur).subscribe();
  }

  onCancelClick(){
    this.isCancel =true;
  }

}
