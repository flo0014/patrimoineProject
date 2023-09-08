import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-garanties-et-revenus',
  templateUrl: './garanties-et-revenus.component.html',
  styleUrls: ['./garanties-et-revenus.component.css']
})
export class GarantiesEtRevenusComponent {

  garantiesEtRevenus = {
    temporaire_deces: false,
    vie_entiere_deces: false,
    arret_travail: false,
    invalidite: false,
    sante: false,
    dependance: false,
    retraite: false,
    etude_enfants: false,
    gav: false,
    obseques: false,
    pj: false,
    traitement_salaires: 0,
    bnc: 0,
    bic: 0,
    agricole: 0,
    pension_retraite: 0,
    residence_fiscale: '',
    facta: ''
  };

  constructor(private http: HttpClient) {}

  ajouterGarantiesEtRevenus() {
    this.http.post('http://localhost:5000/api/ajouterGarantiesEtRevenus', this.garantiesEtRevenus)
      .subscribe(response => {
        console.log('Garanties et Revenus ajoutés:', response);
      });
  }
}

