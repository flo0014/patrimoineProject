from sqlalchemy import Column, Integer, String, Date, Enum, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

Base = declarative_base()

# Modèle pour l'État Civil
class EtatCivil(Base):
    __tablename__ = 'etat_civil'
    
    id = Column(Integer, primary_key=True)
    nom = Column(String)
    prenom = Column(String)
    date_naissance = Column(Date)
    lieu_naissance = Column(String)
    nationalite = Column(String)
    adresse = Column(String)
    code_postal = Column(String)
    ville = Column(String)
    telephone = Column(String)
    email = Column(String)
    lien = Column(Enum('parent-enfant', 'conjoint'))
    statut_conjoint = Column(Enum('marié', 'pacsé', 'concubinage'))
    regime_matrimonial = Column(String)
    statut_personnel = Column(Enum('veuf', 'célibataire', 'séparé', 'divorcé'))

