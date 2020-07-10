export interface News {
  id: string;
  title: string;
  date: string;
  componentName: string;
}

export const NEWS: News[] = [
  { id: 'nowa-kultura', date: '10-07-2020', title: 'Nowa Klutura', componentName: 'NewsNowaKultura' },
];
