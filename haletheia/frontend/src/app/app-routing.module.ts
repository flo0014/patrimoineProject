import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EtatCivilComponent } from './etat-civil/etat-civil.component';
import { CarriereProfessionnelleComponent } from './carriere-professionnelle/carriere-professionnelle.component';
import { LiberalitesComponent } from './liberalites/liberalites.component';
import { GarantiesEtRevenusComponent } from './garanties-et-revenus/garanties-et-revenus.component';
import { PatrimoineImmobilierComponent } from './patrimoine-immobilier/patrimoine-immobilier.component';
import { PatrimoineMobilierComponent } from './patrimoine-mobilier/patrimoine-mobilier.component';
import { BesoinsClientComponent } from './besoins-client/besoins-client.component';
import { ConnaissancesFinancieresComponent } from './connaissances-financieres/connaissances-financieres.component';

const routes: Routes = [
  { path: 'etat-civil', component: EtatCivilComponent },
  { path: 'carriere-professionnelle', component: CarriereProfessionnelleComponent },
  { path: 'liberalites', component: LiberalitesComponent },
  { path: 'garanties-et-revenus', component: GarantiesEtRevenusComponent },
  { path: 'patrimoine-immobilier', component: PatrimoineImmobilierComponent },
  { path: 'patrimoine-mobilier', component: PatrimoineMobilierComponent },
  { path: 'besoins-client', component: BesoinsClientComponent },
  { path: 'connaissances-financieres', component: ConnaissancesFinancieresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
