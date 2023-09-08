import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface GarantiesEtRevenus {
  traitement_salaires: number;
  bnc: number;
  bic: number;
  agricole: number;
  pension_retraite: number;
  residence_fiscale: string;
  soumis_FACTA: boolean;
  [key: string]: any;
};

@Component({
  selector: 'app-garanties-et-revenus',
  templateUrl: './garanties-et-revenus.component.html',
  styleUrls: ['./garanties-et-revenus.component.css']
})
export class GarantiesEtRevenusComponent implements OnInit {

  garantiesEtRevenus: GarantiesEtRevenus = {
    traitement_salaires: 0,
    bnc: 0,
    bic: 0,
    agricole: 0,
    pension_retraite: 0,
    residence_fiscale: '',
    soumis_FACTA: false,
  };

  items = [
    'temporaire_deces',
    'vie_entiere_deces',
    'arret_de_travail',
    'invalidite',
    'sante',
    'dependance',
    'retraite',
    'etude_enfants',
    'GAV',
    'obseques',
    'PJ'
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  ajouterGarantiesEtRevenus() {
    // Votre logique de POST ici
  }
}

