import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Couleur} from "../../../modeles/couleur";
import {CouleurService} from "../../../services/couleur.service";

@Component({
  selector: 'app-form-couleurs',
  templateUrl: './form-couleurs.component.html',
  styleUrls: ['./form-couleurs.component.css']
})
export class FormCouleursComponent implements OnInit {
  @Output() soumis = new EventEmitter();

  couleurform = new Couleur(0,'')
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
    this.serviceCouleur.addCouleur(couleur);
console.log(this.serviceCouleur.getCouleurs())
  }

  onCancelClick(){
    this.isCancel =true;
  }

}
