from models import EtatCivil, CarriereProfessionnelle, Session

# Ajouter une nouvelle entrée pour l'État Civil
def ajouter_etat_civil(session, etat_civil_data):
    etat_civil = EtatCivil(**etat_civil_data)
    session.add(etat_civil)
    session.commit()

# Ajouter une nouvelle entrée pour la Carrière Professionnelle
def ajouter_carriere_prof(session, carriere_prof_data):
    carriere_prof = CarriereProfessionnelle(**carriere_prof_data)
    session.add(carriere_prof)
    session.commit()

