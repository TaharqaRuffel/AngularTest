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
import { FormBouteilleComponent } from './composants/formulaires/form-bouteille/form-bouteille.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import {HttpClientModule} from "@angular/common/http";
import {ApiHttpService} from "./core/services/api-http.service";
import {ApiEndpointsService} from "./core/services/api-endpoints.service";
import {Constants} from "./config/constants";


@NgModule({
  declarations: [
    AppComponent,
    BouteilleComponent,
    CouleurComponent,
    RegionComponent,
    BouteillesComponent,
    FormCouleursComponent,
    FormRegionComponent,
    FormBouteilleComponent,
    AccueilComponent,
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
