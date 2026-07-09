// Bron-van-waarheid voor het Dockwize tool-overzicht.
// Dit is de seed: bij "Beheer" op de site kun je kaarten toevoegen/aanpassen
// (opgeslagen in de browser). Met "Exporteer" haal je die wijzigingen op
// om ze hier vast te leggen zodat ze voor iedereen gelden.

export type Status = 'live' | 'ontwikkeling' | 'concept' | 'intern';

export interface Tool {
  id: string;
  title: string;
  category: string;
  description: string;
  status: Status;
  url: string | null;
  meta?: string;
  tags?: string[];
}

// Volgorde van de categorie-secties op de pagina.
export const CATEGORIES = [
  'Software & tools',
  'Website & content',
  'Events & campagne',
  'Sessies & analyses',
] as const;

export const STATUS_LABEL: Record<Status, string> = {
  live: 'Live',
  ontwikkeling: 'In ontwikkeling',
  concept: 'Concept',
  intern: 'Intern / afgerond',
};

export const TOOLS: Tool[] = [
  {
    id: 'kompas',
    title: 'Dockwize Kompas',
    category: 'Software & tools',
    description:
      'Slimme fasescan als zwevende knop op de website. Bepaalt in welke groeifase een ondernemer zit en verwijst door naar het juiste programma. Inzendingen komen binnen in het beheerpaneel.',
    status: 'live',
    url: 'https://demo-dockwize-wizard.vercel.app',
    meta: 'Voor de website · beheer op /beheer',
    tags: ['Wizard', 'Website', 'Leads'],
  },
  {
    id: 'familiebedrijven',
    title: 'APK Familiebedrijven',
    category: 'Software & tools',
    description:
      'Zet de vragenlijst-antwoorden per categorie automatisch om naar de kleurplaat en genereert per sessie een rapport. Vervangt het handmatige Excel-werk van het traject.',
    status: 'live',
    url: 'https://demo-dockwize-familiebedrijven.vercel.app',
    meta: 'Eigenaar: Imro Wong',
    tags: ['Kleurplaat', 'Rapport', 'AI'],
  },
  {
    id: 'kennisassistent',
    title: 'AI-Kennisassistent',
    category: 'Software & tools',
    description:
      'Chat-assistent op het leiderschaps- en groeiprogramma, met antwoorden uit de eigen kennisbank. Overgedragen door Nedbase; draait lokaal en wacht op de productie-koppeling.',
    status: 'ontwikkeling',
    url: null,
    meta: 'Van: Laurens (Nedbase) · lokaal',
    tags: ['AI', 'Chat', 'Kennisbank'],
  },
  {
    id: 'website-herbouw',
    title: 'Website-herbouw (demo)',
    category: 'Website & content',
    description:
      'Volledige na-bouw van de dockwize.nl-pagina’s in de nieuwe stijl: home, starten, community, faciliteiten en events. Onderdeel van de Kompas-demo.',
    status: 'concept',
    url: 'https://demo-dockwize-wizard.vercel.app',
    meta: 'Multipage demo',
    tags: ['Website', 'Design'],
  },
  {
    id: 'programma-overzicht',
    title: 'Programma-overzicht',
    category: 'Website & content',
    description:
      'Overzichtspagina van alle Dockwize-programma’s per groeifase (Kickstart, Scale-up en meer), als los onderdeel opgezet.',
    status: 'concept',
    url: null,
    meta: 'Lokaal · voor Pascal',
    tags: ['Programma’s', 'Content'],
  },
  {
    id: '16-unlocked',
    title: '16 Years Unlocked',
    category: 'Events & campagne',
    description:
      'Jubileum-eventsite met interactieve plattegrond, klikbare hotspots en programma-timeline voor het Sweet Sixteen feest (16 jaar Dockwize).',
    status: 'live',
    url: 'https://dockwize-16-unlocked.vercel.app',
    meta: 'Sweet Sixteen',
    tags: ['Event', 'Plattegrond'],
  },
  {
    id: 'ambassadeurs',
    title: 'Ambassadeursvideo’s',
    category: 'Events & campagne',
    description:
      'Premium script- en conceptdocument voor de ambassadeursvideo-campagne Dockwize x Citymarketing Vlissingen. Vijf ambassadeurs, geleverd in 9:16 en 16:9.',
    status: 'concept',
    url: null,
    meta: 'Opnames juli · PDF',
    tags: ['Video', 'Campagne', 'Script'],
  },
  {
    id: 'sweet-sixteen-deck',
    title: 'Sweet Sixteen validatiedeck',
    category: 'Sessies & analyses',
    description:
      'A3 print-deck van zeven borden voor de validatiesessie van deelnemer Marnik de Haan: stickerbord, post-it muur en turflijst.',
    status: 'intern',
    url: null,
    meta: 'PDF · A3 liggend',
    tags: ['Print', 'Sessie'],
  },
  {
    id: 'waterwijs',
    title: 'Waterwijs Trendanalyse',
    category: 'Sessies & analyses',
    description:
      'Trendanalyse voor de campings binnen Waterwijs: data per camping, presentatie-deck en notities voor de terugkoppeling.',
    status: 'intern',
    url: null,
    meta: 'PPTX / PDF',
    tags: ['Analyse', 'Camping'],
  },
  {
    id: 'constructie-docs',
    title: 'Constructie-documenten',
    category: 'Sessies & analyses',
    description:
      'Gerenderde documenten in de Dockwize-huisstijl (Jorik en Marlon), opgebouwd uit een gedeelde databron.',
    status: 'intern',
    url: null,
    meta: 'HTML naar PDF',
    tags: ['Document'],
  },
];
