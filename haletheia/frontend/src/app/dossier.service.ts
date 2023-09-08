import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DossierService {

  private apiURL = 'http://votre-api.com/api';  // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  enregistrerDossier(dossier: any): Observable<any> {
    return this.http.post(`${this.apiURL}/enregistrer`, dossier);
  }

  ouvrirDossier(id: string): Observable<any> {
    return this.http.get(`${this.apiURL}/ouvrir/${id}`);
  }
}

