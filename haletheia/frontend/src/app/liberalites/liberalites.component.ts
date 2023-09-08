import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-liberalites',
  templateUrl: './liberalites.component.html',
  styleUrls: ['./liberalites.component.css']
})
export class LiberalitesComponent {

  liberalite = {
    donation_simple: false,
    donation_partage: false,
    legs: false,
    donation_dernier_vivant: false,
    testament: false,
    societeAcquets: false,
    selectedBien: '',
    biens: [],
    attributionIntegrale: false,
    attributionIntegraleDetails: '',
    clausePreciput: false,
    clausePreciputDetails: '',
    notaire: ''
  };

  constructor(private http: HttpClient) {
    // Ici, vous pouvez ajouter des initialisations spécifiques au constructeur si nécessaire
  }

  ajouterLiberalites() {
    this.http.post('http://localhost:5000/api/ajouterLiberalites', this.liberalite)
      .subscribe(response => {
        console.log('Libéralités ajoutées:', response);
      });
  }

  ngOnInit(): void {
    // Initialisation du composant
  }
}

