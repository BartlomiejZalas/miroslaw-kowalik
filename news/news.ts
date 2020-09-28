export interface News {
  id: string;
  title: string;
  date: string;
  componentName: string;
}

export const NEWS: News[] = [
  { id: 'kultura-w-sieci3', date: '28-09-2020', title: 'Kultura w Sieci', componentName: 'NewsKulturaWSieci3' },
  { id: 'kultura-w-sieci2', date: '31-08-2020', title: 'Kultura w Sieci', componentName: 'NewsKulturaWSieci2' },
  { id: 'kultura-w-sieci1', date: '30-07-2020', title: 'Kultura w Sieci', componentName: 'NewsKulturaWSieci1' },
  { id: 'nowa-kultura', date: '10-07-2020', title: 'Nowa Klutura', componentName: 'NewsNowaKultura' },
];
