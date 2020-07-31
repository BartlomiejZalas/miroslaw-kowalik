export interface News {
  id: string;
  title: string;
  date: string;
  componentName: string;
}

export const NEWS: News[] = [
  { id: 'kultura-w-sieci1', date: '30-07-2020', title: 'Kultura w Sieci', componentName: 'NewsKulturaWSieci1' },
  { id: 'nowa-kultura', date: '10-07-2020', title: 'Nowa Klutura', componentName: 'NewsNowaKultura' },
];
