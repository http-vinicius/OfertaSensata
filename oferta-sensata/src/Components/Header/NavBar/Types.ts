export type ItensTypes = {
  id: number;
  nomeItem: string;
};

export type ItensMenuTypes = {
  id: number;
  categoria: string;
  itens: ItensTypes[];
};

export const itensMenu: ItensMenuTypes[] = [
  {
    id: 0,
    categoria: 'Categoria',
    itens: [
      {
        id: 0,
        nomeItem: 'Categoria 1',
      },
      {
        id: 1,
        nomeItem: 'Categoria 2',
      },
      {
        id: 2,
        nomeItem: 'Categoria 3',
      },
    ],
  },
];
