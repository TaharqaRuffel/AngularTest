import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormBouteilleComponent} from "./composants/formulaires/form-bouteille/form-bouteille.component";
import {AccueilComponent} from "./composants/accueil/accueil.component";

const routes: Routes = [
  {path: 'bouteille/ajouter', component : FormBouteilleComponent},
  {path: '', component : AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
