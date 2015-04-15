# Atelier-react
Atelier React Mix IT

La branche [solutions](https://github.com/Zenika/atelier-react/tree/solutions) ne contient que les solutions,
la branch [tp](https://github.com/Zenika/atelier-react/tree/tp) contient le TPs suivits de leur solution

## TODO List
- [x] les tests de la dernière solution, même si les stagiaires devront les écrire eux mêmes
- [x] nettoyer le code, refaire quelques trucs dans l'historique git (genre avoir le package.json final dès le début)
- [ ] les slides
- [ ] le livrable en mode dossier pour ceux qui n'auront pas git
- [x] ~~la VM pour les boulets sous windob qui vont bien nous faire chier pcq jest ne tourne pas sur le machine de merde :@~~ Karma a résolu le problème

## TP0
Hello world classique

## TP1
Lister les bières en vrac dans un composant

## TP2
Mettre en place un composant pour la liste et un composant pour les éléments

## TP3
Mise en place de reflux
- Création des actions
- Création du store qui écoute les actions
- Le composant list doit écouter le store
- Le composant doit déclancher l'action lorsqu'il est monté

## TP4
Ajout d'un champs de recher pour filtrer les bières
- Ajout d'un nouveau composant
- Ajout d'une nouvelle action
- Ajout de nouveaux listener dans le store
- Ecriture des tests avec jest

## TP5
Utilisation de react-router
- Ajout d'un composant detail pour afficher une bière seule
- Ajout d'un store et d'une action pour le nouveau composant
- Mise en place des routes
- Ajout de liens dans les deux pages pour naviguer
- Ecriture des tests avec jest