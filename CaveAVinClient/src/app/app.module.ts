import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BouteilleComponent } from './composants/bouteille/bouteille.component';
import { CouleurComponent } from './composants/couleur/couleur.component';
import { RegionComponent } from './composants/region/region.component';

@NgModule({
  declarations: [
    AppComponent,
    BouteilleComponent,
    CouleurComponent,
    RegionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
