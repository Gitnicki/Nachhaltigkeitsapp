# Nachhaltigkeitsapp - EcoLeaf

Eine App, die Benutzern ermöglicht, ihren persönlichen ökologischen Fußabdruck zu verfolgen. Integrierte Funktionen wie CO2-Bilanz, Wasserverbrauch und Abfallmanagement. Tipps zur Reduzierung des ökologischen Fußabdrucks einbeziehen.

# Setup

GIT Repo clonen

Verwendet Nodejs Server

Requirements installieren:

```
npm init
```

```
npm install --save
```
Starten im backend/src - Ordner

```
node app.js
```
Frontend:

Landingpage ist im frontend/index.html. Bisher gibt es nur einen Localstorage, so dass bei jedem Neustart des Servers die Daten verloren gehen. Es wird aber eine Datenbank implementiert.