import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtatCivilComponent } from './etat-civil/etat-civil.component';
import { CarriereProfessionnelleComponent } from './carriere-professionnelle/carriere-professionnelle.component';

const routes: Routes = [
  { path: 'etat-civil', component: EtatCivilComponent },
  { path: 'carriere-professionnelle', component: CarriereProfessionnelleComponent },
  // autres routes ici
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

