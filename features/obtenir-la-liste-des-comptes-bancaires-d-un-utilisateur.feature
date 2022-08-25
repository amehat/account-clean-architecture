# language: fr
Fonctionnalité: Liste des comptes bancaires

Scénario: Obtenir la liste des comptes bancaires d'un utilisateur
    Étant donné un utilisateur authentifié :
        | identifiant |
        | john.doe |
        | jane.doe |
    Quand l'utilisateur demande la liste des comptes bancaires
    Alors il obtient la liste des comptes bancaires :
        | numéro de compte | nom de la banque |
        | 465465465D | Crédit Coopératif |
        | 5465464768FF | BNP |
        | 369544Y878d | LCL |