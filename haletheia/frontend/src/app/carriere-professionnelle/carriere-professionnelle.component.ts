import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carriere-professionnelle',
  templateUrl: './carriere-professionnelle.component.html',
  styleUrls: ['./carriere-professionnelle.component.css']
})
export class CarriereProfessionnelleComponent implements OnInit {
  carriereProfessionnelle = {
    statut: '',
    annees_activite: 0,
    revenu_moyen: 0,
    chiffre_affaire: 0,
    charges_pro: 0
  };

  profession: string;
  selectedStatut: string;
  statuts: string[] = [
    'Salarié du public',
    'Fonctionnaire',
    'Salarié du privé',
    'Militaire',
    'Chef d\'entreprise',
    'Professionnel libéral',
    'Micro-Entrepreneur'
  ];

  constructor(private http: HttpClient) { 
    this.profession = '';
    this.selectedStatut = '';
  }

  ngOnInit() {
    // Votre logique d'initialisation ici
  }

  ajouterCarriereProf() {
    // Utilisation de http://localhost:5000/api/ajouterCarriereProf comme URL de l'API.
    this.http.post('http://localhost:5000/api/ajouterCarriereProf', this.carriereProfessionnelle).subscribe(response => {
        console.log('Carrière professionnelle ajoutée:', response);
        // Vous pouvez ajouter des actions supplémentaires ici, comme des alertes ou des redirections
    });
  }
}

