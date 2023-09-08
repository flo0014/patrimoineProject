from models import Base
from sqlalchemy import create_engine

# Création de la base de données
engine = create_engine('sqlite:///database/database.db')
Base.metadata.create_all(engine)
