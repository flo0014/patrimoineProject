from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)

class EtatCivil(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nom = db.Column(db.String(100), nullable=False)
    prenom = db.Column(db.String(100), nullable=False)
    date_naissance = db.Column(db.String(20), nullable=False)
    lieu_naissance = db.Column(db.String(100), nullable=False)
    nationalite = db.Column(db.String(100), nullable=False)
    numero_voie = db.Column(db.String(50), nullable=False)
    code_postal = db.Column(db.String(10), nullable=False)
    ville = db.Column(db.String(100), nullable=False)
    telephone = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    lien = db.Column(db.String(50), nullable=False)
    statut_conjugal = db.Column(db.String(50), nullable=False)
    regime_matrimonial = db.Column(db.String(50), nullable=True)
    statut_social = db.Column(db.String(50), nullable=False)

class CarriereProfessionnelle(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    statut = db.Column(db.String(100), nullable=False)
    annees_activite = db.Column(db.Integer, nullable=False)
    revenu_moyen = db.Column(db.Float, nullable=False)

class Liberalites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    donation_simple = db.Column(db.Boolean, nullable=True)
    donation_partage = db.Column(db.Boolean, nullable=True)
    legs = db.Column(db.Boolean, nullable=True)
    donation_dernier_vivant = db.Column(db.Boolean, nullable=True)
    testament = db.Column(db.Boolean, nullable=True)
    notaire = db.Column(db.String(100), nullable=True)

class GarantiesEtRevenus(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    temporaire_deces = db.Column(db.Boolean, nullable=True)
    vie_entiere_deces = db.Column(db.Boolean, nullable=True)
    arret_travail = db.Column(db.Boolean, nullable=True)
    invalidite = db.Column(db.Boolean, nullable=True)
    sante = db.Column(db.Boolean, nullable=True)
    dependance = db.Column(db.Boolean, nullable=True)
    retraite = db.Column(db.Boolean, nullable=True)
    etude_enfants = db.Column(db.Boolean, nullable=True)
    gav = db.Column(db.Boolean, nullable=True)
    obseques = db.Column(db.Boolean, nullable=True)
    pj = db.Column(db.Boolean, nullable=True)
    traitement_salaires = db.Column(db.Float, nullable=True)
    bnc = db.Column(db.Float, nullable=True)
    bic = db.Column(db.Float, nullable=True)
    agricole = db.Column(db.Float, nullable=True)
    pension_retraite = db.Column(db.Float, nullable=True)
    residence_fiscale = db.Column(db.String(100), nullable=True)
    facta = db.Column(db.String(100), nullable=True)

class PatrimoineImmobilier(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    residence_principale = db.Column(db.String(100), nullable=True)
    residences_secondaires = db.Column(db.String(100), nullable=True)
    autres_biens_usage = db.Column(db.String(100), nullable=True)
    immeubles_locatifs = db.Column(db.String(100), nullable=True)
    biens_pro = db.Column(db.String(100), nullable=True)
    sci = db.Column(db.String(100), nullable=True)
    autres_biens_rapport = db.Column(db.String(100), nullable=True)
    date_debut = db.Column(db.String(100), nullable=True)
    date_fin = db.Column(db.String(100), nullable=True)
    taeg = db.Column(db.Float, nullable=True)
    crd = db.Column(db.Float, nullable=True)

class PatrimoineMobilier(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    livret = db.Column(db.Float, nullable=True)
    cat = db.Column(db.Float, nullable=True)
    monetaire = db.Column(db.Float, nullable=True)
    del_value = db.Column(db.Float, nullable=True)
    pel = db.Column(db.Float, nullable=True)
    pea = db.Column(db.Float, nullable=True)
    ct = db.Column(db.Float, nullable=True)
    assurance_vie = db.Column(db.Float, nullable=True)
    per = db.Column(db.Float, nullable=True)
    pep = db.Column(db.Float, nullable=True)

class ConnaissancesFinancieres(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    experience_investissement = db.Column(db.String(100), nullable=True)
    objectif_investissement = db.Column(db.String(100), nullable=True)
    horizon_investissement = db.Column(db.String(100), nullable=True)
    tolerance_risque = db.Column(db.String(100), nullable=True)

class BesoinsClient(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    argent_liquide = db.Column(db.Float, nullable=True)
    budget_familial = db.Column(db.Float, nullable=True)
    incapacite = db.Column(db.String(100), nullable=True)
    retraite_revenus = db.Column(db.Float, nullable=True)
    retraite_capitaux = db.Column(db.Float, nullable=True)
    revenus_familiaux = db.Column(db.Float, nullable=True)
    etudes_enfants = db.Column(db.Float, nullable=True)
    dependance = db.Column(db.String(100), nullable=True)
    complementaire_sante = db.Column(db.String(100), nullable=True)

@app.route('/api/ajouterEtatCivil', methods=['POST'])
def ajouter_etat_civil():
    data = request.json
    etat_civil = EtatCivil(**data)
    db.session.add(etat_civil)
    db.session.commit()
    return jsonify(status="success")

@app.route('/api/ajouterCarriereProf', methods=['POST'])
def ajouter_carriere_prof():
    data = request.json
    carriere = CarriereProfessionnelle(**data)
    db.session.add(carriere)
    db.session.commit()
    return jsonify(status="success")
    
@app.route('/api/ajouterLiberalites', methods=['POST'])
def ajouter_liberalites():
    data = request.json
    liberalite = Liberalites(**data)
    db.session.add(liberalite)
    db.session.commit()
    return jsonify(status="success")


@app.route('/api/ajouterGarantiesEtRevenus', methods=['POST'])
def ajouter_garanties_et_revenus():
    data = request.json
    garanties_et_revenus = GarantiesEtRevenus(**data)
    db.session.add(garanties_et_revenus)
    db.session.commit()
    return jsonify(status="success")

@app.route('/api/ajouterPatrimoineImmobilier', methods=['POST'])
def ajouter_patrimoine_immobilier():
    data = request.json
    patrimoine = PatrimoineImmobilier(**data)
    db.session.add(patrimoine)
    db.session.commit()
    return jsonify(status="success")

@app.route('/api/ajouterPatrimoineMobilier', methods=['POST'])
def ajouter_patrimoine_mobilier():
    data = request.json
    patrimoine_mobilier = PatrimoineMobilier(**data)
    db.session.add(patrimoine_mobilier)
    db.session.commit()
    return jsonify(status="success")

@app.route('/api/ajouterConnaissancesFinancieres', methods=['POST'])
def ajouter_connaissances_financieres():
    data = request.json
    connaissances_financieres = ConnaissancesFinancieres(**data)
    db.session.add(connaissances_financieres)
    db.session.commit()
    return jsonify(status="success")

@app.route('/api/ajouterBesoinsClient', methods=['POST'])
def ajouter_besoins_client():
    data = request.json
    besoins_client = BesoinsClient(**data)
    db.session.add(besoins_client)
    db.session.commit()
    return jsonify(status="success")

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)

