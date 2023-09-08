// etat-civil.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etat-civil',
  templateUrl: './etat-civil.component.html',
  styleUrls: ['./etat-civil.component.css']
})
export class EtatCivilComponent implements OnInit {
  etatCivil = {
    nom: '',
    prenom: '',
    date_naissance: '',
    lieu_naissance: '',
    nationalite: '',
    adresse: '',
    code_postal: '',
    ville: '',
    telephone: '',
    email: ''
  };

  conjoint = {
    nom: '',
    prenom: '',
    date_naissance: '',
    lieu_naissance: '',
    nationalite: '',
    telephone: '',
    email: ''
  };

  enfants: any[] = [];

  situationMatrimoniale: string;
  situationMatrimonialeOptions: string[] = ['Marié', 'Pacsé', 'Concubinage', 'Célibataire', 'Veuf(ve)', 'Séparé(e)', 'Divorcé(e)'];
  
  regimeMatrimonial: string;
  regimeMatrimonialOptions: string[] = ['Communauté réduite aux acquêts', 'Séparation de biens', 'Communauté universelle'];


  constructor() {
  this.situationMatrimoniale = '';
  this.regimeMatrimonial = '';
}

  ngOnInit(): void {
  }

  ajouterEnfant() {
    this.enfants.push({
      nom: '',
      prenom: '',
      date_naissance: '',
      lieu_naissance: '',
      telephone: '',
      email: '',
      parent: ''
    });
  }

  supprimerEnfant(index: number) {
    this.enfants.splice(index, 1);
  }
}

