import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BouteilleComponent } from './composants/bouteille/bouteille.component';
import { CouleurComponent } from './composants/couleur/couleur.component';
import { RegionsComponent } from './composants/regions/regions.component';
import { BouteillesComponent } from './composants/bouteilles/bouteilles.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormCouleurComponent } from './composants/formulaires/form-couleur/form-couleur.component';
import { FormRegionComponent } from './composants/formulaires/form-region/form-region.component';
import { FormBouteilleComponent } from './composants/formulaires/form-bouteille/form-bouteille.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import {HttpClientModule} from "@angular/common/http";
import {ApiHttpService} from "./core/services/api-http.service";
import {ApiEndpointsService} from "./core/services/api-endpoints.service";
import {Constants} from "./config/constants";
import { FormMultiRegionComponent } from './composants/formulaires/form-multi-region/form-multi-region.component';
import { FormRegionEditComponent } from './composants/formulaires/form-region-edit/form-region-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    BouteilleComponent,
    CouleurComponent,
    RegionsComponent,
    BouteillesComponent,
    FormCouleursComponent,
    FormRegionComponent,
    FormBouteilleComponent,
    AccueilComponent,
    FormMultiRegionComponent,
    FormRegionEditComponent,
    CouleursComponent,
    FormCouleurEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide:LOCALE_ID,
      useValue:'fr'
    },
      ApiHttpService,
      ApiEndpointsService,
      Constants
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
