import Huberman from './Huberman Lab Clips';
import Yomi from './Yomi Denzel';

export type BulletPoints = string[];

export type Section = {
  timeStart: string;
  timeEnd: string;
  title: string;
  summary: string;
  importantQuote: string;
  notes: BulletPoints;
  actions: BulletPoints;
};

export type Summary = {
  title: string;
  slug: string;
  iframeUrl: string;
  img: string;
  author: string;
  description: string;
  sections: Section[];
};

export const allSummaries = [...Yomi, ...Huberman].reverse();
