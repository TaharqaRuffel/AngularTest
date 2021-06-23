import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormBouteilleComponent} from "./composants/formulaires/form-bouteille/form-bouteille.component";
import {AccueilComponent} from "./composants/accueil/accueil.component";
import {BouteillesComponent} from "./composants/bouteilles/bouteilles.component";
import {BouteilleComponent} from "./composants/bouteille/bouteille.component";
import {RegionsComponent} from "./composants/regions/regions.component";
import {CouleursComponent} from "./composants/couleurs/couleurs.component";

const routes: Routes = [
  {path: '', component : AccueilComponent},
  {path: 'bouteilles', component : BouteillesComponent},
  {path: 'bouteilles/:id', component : BouteilleComponent},
  {path: 'bouteille/ajouter', component : FormBouteilleComponent},
  {path: 'bouteille/editer/:id', component : FormBouteilleComponent},
  {path: 'regions', component : RegionsComponent},
  {path: 'couleurs', component : CouleursComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
