import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patrimoine-immobilier',
  templateUrl: './patrimoine-immobilier.component.html',
  styleUrls: ['./patrimoine-immobilier.component.css']
})
export class PatrimoineImmobilierComponent {

  patrimoineImmobilier = {
    residence_principale: '',
    residences_secondaires: '',
    autres_biens_usage: '',
    immeubles_locatifs: '',
    biens_pro: '',
    sci: '',
    autres_biens_rapport: '',
    date_debut: '',
    date_fin: '',
    taeg: 0,
    crd: 0
  };

  constructor(private http: HttpClient) {}

  ajouterPatrimoineImmobilier() {
    this.http.post('http://localhost:5000/api/ajouterPatrimoineImmobilier', this.patrimoineImmobilier)
      .subscribe(response => {
        console.log('Patrimoine Immobilier ajouté:', response);
      });
  }
}

