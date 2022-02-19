import { Permis } from "./permis.model";

export interface Condidat {
  id: string;
  photo: string;
  nom: string;
  prenom: string;
  addresse: string;
  profession: string;
  cin: number;
  phone: number;
  //naissance: string;
  code: number;
  conduit: number;
  remarque: string;
  email: string;
  TypePermis: Permis;
}
