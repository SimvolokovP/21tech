type CaseCardType = "landing" | "tma";

export interface ICaseCard {
  id: number;
  title: string;
  descr: string;
  fullDescr?: string;
  mainImage?: string;
  hoverImage?: string;
  type: CaseCardType;
}
