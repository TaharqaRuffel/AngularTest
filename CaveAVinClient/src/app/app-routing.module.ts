import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormBouteilleComponent} from "./composants/formulaires/form-bouteille/form-bouteille.component";
import {AccueilComponent} from "./composants/accueil/accueil.component";
import {BouteillesComponent} from "./composants/bouteilles/bouteilles.component";
import {BouteilleComponent} from "./composants/bouteille/bouteille.component";

const routes: Routes = [
  {path: '', component : AccueilComponent},
  {path: 'bouteilles', component : BouteillesComponent},
  {path: 'bouteilles/:id', component : BouteilleComponent},
  {path: 'bouteille/ajouter', component : FormBouteilleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
