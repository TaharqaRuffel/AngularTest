import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BouteilleComponent } from './composants/bouteille/bouteille.component';
import { CouleurComponent } from './composants/couleur/couleur.component';
import { RegionComponent } from './composants/region/region.component';
import { BouteillesComponent } from './composants/bouteilles/bouteilles.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormCouleursComponent } from './composants/formulaires/form-couleurs/form-couleurs.component';
import { FormRegionComponent } from './composants/formulaires/form-region/form-region.component';


@NgModule({
  declarations: [
    AppComponent,
    BouteilleComponent,
    CouleurComponent,
    RegionComponent,
    BouteillesComponent,
    FormCouleursComponent,
    FormRegionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide:LOCALE_ID, useValue:'fr'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
