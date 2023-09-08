import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtatCivilComponent } from './etat-civil/etat-civil.component';
import { CarriereProfessionnelleComponent } from './carriere-professionnelle/carriere-professionnelle.component';
import { LiberalitesComponent } from './liberalites/liberalites.component';
import { GarantiesEtRevenusComponent } from './garanties-et-revenus/garanties-et-revenus.component';
import { PatrimoineImmobilierComponent } from './patrimoine-immobilier/patrimoine-immobilier.component';
import { PatrimoineMobilierComponent } from './patrimoine-mobilier/patrimoine-mobilier.component';
import { BesoinsClientComponent } from './besoins-client/besoins-client.component';
import { ConnaissancesFinancieresComponent } from './connaissances-financieres/connaissances-financieres.component';

@NgModule({
  declarations: [
    AppComponent,
    EtatCivilComponent,
    CarriereProfessionnelleComponent,
    LiberalitesComponent,
    GarantiesEtRevenusComponent,
    PatrimoineImmobilierComponent,
    PatrimoineMobilierComponent,
    BesoinsClientComponent,
    ConnaissancesFinancieresComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,    
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
