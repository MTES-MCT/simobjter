export interface Action {
  id: string;
  leverName: string;
  region: string;
  objCO2: number;
  objPhys: number;
  unitPhys: string;
  unitCO2: string;
  sector: string;
  group: string;
  ratioCO2toPhys: number;
  pathSector: string;
  pathGroup: string;
  regionSlug: string;
}

export interface Lever {
  name: string;
  group: string;
  sector: string;
  pathSector: string;
  pathGroup: string;
  objCO2: number;
  progressionCO2: number;
}

// Part de l’objectif déjà réalisée ou planifiée, en unités physiques
// à diviser par ratioCO2toPhys pour l'obtenir en ktCO₂e
export type RegionCompletionLevels = {
  [leverName: string]: number;
};
export type CompletionLevels = {
  [region: string]: RegionCompletionLevels;
};

// Cible définie par l'utilisateur, en unités physiques
// à diviser par ratioCO2toPhys pour l'obtenir en ktCO₂e
export type RegionNewTargets = {
  [leverName: string]: number | null;
};
export type NewTargets = {
  [region: string]: RegionNewTargets;
};
