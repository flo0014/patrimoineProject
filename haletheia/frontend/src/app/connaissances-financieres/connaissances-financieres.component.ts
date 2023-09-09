import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-connaissances-financieres',
  templateUrl: './connaissances-financieres.component.html',
  styleUrls: ['./connaissances-financieres.component.css']
})
export class ConnaissancesFinancieresComponent {
  connaissancesForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.connaissancesForm = this.fb.group({
      // vos champs de formulaire ici
    });
  }

  createForm() {
    this.connaissancesForm = this.fb.group({
      objectifEpargne: [''],
      horizonPlacement: [''],
      investiBourse: [''],
      typeInvestissement: [''],
      reactionValeurDiminue: [''],
      niveauRisque: [''],
    });
  }

  onSubmit() {
    console.log('Form Submitted:', this.connaissancesForm.value);
    // Ici, vous pouvez ajouter la logique pour envoyer ces données au serveur ou les traiter comme vous le souhaitez.
  }
}

