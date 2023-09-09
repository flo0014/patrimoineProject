import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-garanties-et-revenus',
  templateUrl: './garanties-et-revenus.component.html',
  styleUrls: ['./garanties-et-revenus.component.css']
})
export class GarantiesEtRevenusComponent implements OnInit {
  garantiesRevenus = {
    traitement_salaires: 0,
    bnc: 0,
    bic: 0,
    agricole: 0,
    pension_retraite: 0,
    temporaire_deces: 0,
    vie_entiere_deces: 0,
    arret_travail: 0,
    invalidite: 0,
    sante: 0,
    dependance: 0,
    retraite: 0,
    etude_enfants: 0,
    GAV: 0,
    obseques: 0,
    PJ: 0,
    residence_fiscale: '',
    soumis_facta: false
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  ajouterGarantiesRevenus() {
    // Logic to add garanties and revenus
  }
}

