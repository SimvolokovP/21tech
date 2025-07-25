export type CaseCardType = "landing" | "tma" | "bot" | "e-commerce" | "webapp";

export interface ICaseCard {
  id: number;
  title: string;
  descr: string;
  fullDescr?: string;
  mainImage?: string;
  hoverImage?: string;
  type: CaseCardType;
}
