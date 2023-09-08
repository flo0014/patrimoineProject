import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-connaissances-financieres',
  templateUrl: './connaissances-financieres.component.html',
  styleUrls: ['./connaissances-financieres.component.css']
})
export class ConnaissancesFinancieresComponent {

  connaissancesFinancieres = {
    experience_investissement: '',
    objectif_investissement: '',
    horizon_investissement: '',
    tolerance_risque: ''
  };

  constructor(private http: HttpClient) {}

  ajouterConnaissancesFinancieres() {
    this.http.post('http://localhost:5000/api/ajouterConnaissancesFinancieres', this.connaissancesFinancieres)
      .subscribe(response => {
        console.log('Connaissances Financières ajoutées:', response);
      });
  }
}

