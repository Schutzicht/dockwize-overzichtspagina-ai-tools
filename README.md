# Dockwize Toolkit

Intern overzicht (launchpad) van alle tools, demo's en documenten die voor Dockwize zijn gebouwd. Alles staat als kaart op één plek, met doorklik naar de betreffende tool.

## Beheer

Klik rechtsboven op **Beheer** om kaarten toe te voegen, aan te passen (titel, categorie, status, link, omschrijving, tags), te verwijderen of te herordenen.

Wijzigingen worden in de browser bewaard (localStorage). Om ze permanent te maken voor iedereen: klik in de beheerbalk op **Exporteren** en plak de JSON in `src/data/tools.ts`, commit en deploy.

## Ontwikkelen

```sh
npm install
npm run dev      # http://localhost:4397
npm run build    # statische build naar dist/
```

Stack: Astro 6 + Tailwind v4 + TypeScript.
