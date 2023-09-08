import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patrimoine-mobilier',
  templateUrl: './patrimoine-mobilier.component.html',
  styleUrls: ['./patrimoine-mobilier.component.css']
})
export class PatrimoineMobilierComponent {

  patrimoineMobilier = {
    livret: 0,
    cat: 0,
    monetaire: 0,
    del: 0,
    pel: 0,
    pea: 0,
    ct: 0,
    assurance_vie: 0,
    per: 0,
    pep: 0
  };

  constructor(private http: HttpClient) {}

  ajouterPatrimoineMobilier() {
    this.http.post('http://localhost:5000/api/ajouterPatrimoineMobilier', this.patrimoineMobilier)
      .subscribe(response => {
        console.log('Patrimoine Mobilier ajouté:', response);
      });
  }
}

