import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Notez la correction ici

@Component({
  selector: 'app-besoins-client',
  templateUrl: './besoins-client.component.html',
  styleUrls: ['./besoins-client.component.css']
})
export class BesoinsClientComponent {

  besoinsClient = {
    argent_liquide: 0,
    budget_familial: 0,
    incapacite: 0,
    retraite_revenus: 0,
    retraite_capitaux: 0,
    revenus_familiaux: 0,
    etudes_enfants: 0,
    dependance: 0,
    complementaire_sante: 0,
    retraite: 0,
    revenus_necessaires: 0
  };

  constructor(private http: HttpClient) {}  // Notez la correction ici

  ajouterBesoinsClient() {
    this.http.post('http://localhost:5000/api/ajouterBesoinsClient', this.besoinsClient)
      .subscribe(response => {
        console.log('Besoins du client ajoutés:', response);
      });
  }
}

